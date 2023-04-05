import React, { useState, useEffect } from "react";
import Select from "react-select";
import { css } from "@emotion/react";
import { ScaleLoader } from "react-spinners";
import DisplayResult from "../displayResult/DisplayResult";

function RouteList() {
  const [options, setOptions] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [totalRoutes, setTotalRoutes] = useState(0);

  useEffect(() => {
    fetch("https://transport-route-bd-server.vercel.app/api/v1/bus/allRoutes")
      .then((response) => response.json())
      .then((data) => {
        setTotalRoutes(data.total_count);
        setOptions(
          data.routeList.map((item) => ({
            label: item.routeName,
            value: item.routeName,
          }))
        );
        setIsLoading(false);
      });
  }, []);

  const handleSelect1Change = (selectedOption) => {
    setSelectedOption1(selectedOption);
  };

  const handleSelect2Change = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };

  const handleButtonClick = () => {
    if (!selectedOption1 || !selectedOption2) {
      alert("Both options are required");
    } else if (selectedOption1.label === selectedOption2.label) {
      alert("Both options can't be the same.");
    } else {
      setShowResult(true);
    }
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <>
      <div className="flex items-center justify-center p-12">
        {isLoading ? (
          <ScaleLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={isLoading}
          />
        ) : (
          <>
            <div className="mx-auto w-full max-w-[550px]" id="routes">
              <p className="text-base text-center font-bold dark:text-white">
                Total Routes:{" "}
                <span className="text-base text-center font-bold bg-yellow-100 text-yellow-800 mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                  {totalRoutes}
                </span>
              </p>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full p-3 sm:w-1/2 dark:bg-gray-900 text-[#07074D] dark:text-white">
                  <div className="mb-2">
                    <label
                      for="From"
                      className="mb-2 block text-base text-center font-medium"
                    >
                      From
                    </label>
                    <Select
                      options={options}
                      onChange={handleSelect1Change}
                      value={selectedOption1}
                      isSearchable={true}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-gray-800 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full p-3 sm:w-1/2 dark:bg-gray-900 text-[#07074D] dark:text-white">
                  <div className="mb-2">
                    <label
                      for="To"
                      className="mb-2 block text-base text-center font-medium"
                    >
                      To
                    </label>
                    <Select
                      options={options}
                      onChange={handleSelect2Change}
                      value={selectedOption2}
                      isSearchable={true}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white dark:bg-gray-800 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-3">
                <button
                  onClick={handleButtonClick}
                  className="hover:shadow-form rounded-md bg-[#6A64F1] dark:bg-gray-800 dark:hover:dark:bg-gray-900 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {showResult && (
        <DisplayResult
          key={`${selectedOption1?.value}-${selectedOption2?.value}`}
          from={selectedOption1?.label}
          to={selectedOption2?.label}
        />
      )}
    </>
  );
}

export default RouteList;
