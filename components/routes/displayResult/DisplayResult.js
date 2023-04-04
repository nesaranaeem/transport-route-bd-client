import React, { useState, useEffect } from "react";
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
            <h2>{busData.total_count}</h2>
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
