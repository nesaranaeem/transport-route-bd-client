import React, { useState, useEffect } from "react";
import { BsFillInfoCircleFill, BsFillEmojiFrownFill } from "react-icons/bs";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import BusDetailsCard from "./BusDetailsCard";
function DisplayResult({ from, to }) {
  const [busData, setBusData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchedBus = busData.data;
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  useEffect(() => {
    fetch(
      `https://transport-route-bd-server.vercel.app/api/v1/bus?from=${from}&to=${to}`
    )
      .then((response) => response.json())
      .then((data) => setBusData(data));
    setLoading(false);
  }, []);
  console.log(busData, fetchedBus);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <div className="sweet-loading">
            <ClipLoader
              color={"#123abc"}
              loading={loading}
              css={override}
              size={150}
            />
          </div>
        </div>
      ) : (
        <>
          <div>
            {busData?.total_count > 0 ? (
              <>
                <div className="flex justify-center items-center mb-2">
                  <BsFillInfoCircleFill className="mr-2 text-xl" />
                  <span className="text-gray-700 text-2xl font-bold dark:text-white">
                    Total {busData?.total_count} Bus Found
                  </span>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center mb-2">
                <BsFillEmojiFrownFill className="mr-2 text-xl" />
                <span className="text-gray-700 text-2xl font-bold dark:text-white">
                  এই রুটে কোন বাস পাওয়া যায় নি। সম্ভবত ডিরেক্ট এই রুটে কোন বাস
                  চলাচল করে না।
                </span>
              </div>
            )}
          </div>
          <div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center">
              {fetchedBus?.map((bus) => (
                <BusDetailsCard key={bus._id} bus={bus} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DisplayResult;
