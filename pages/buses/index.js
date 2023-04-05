import BusDetailsCard from "@/components/routes/displayResult/BusDetailsCard";
import Head from "next/head";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { ScaleLoader } from "react-spinners";
import { BsFillInfoCircleFill, BsFillEmojiFrownFill } from "react-icons/bs";
function index() {
  const [buses, setBuses] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://transport-route-bd-server.vercel.app/api/v1/bus?page=${currentPage}&limit=${perPage}`
      );
      const data = await response.json();
      setBuses(data.data);
      setTotalCount(data.total_count);
      setIsLoading(false);
    }
    fetchData();
  }, [currentPage, perPage]);

  function handlePerPageChange(e) {
    setPerPage(Number(e.target.value));
    setCurrentPage(1);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const totalPages = Math.ceil(totalCount / perPage);
  const maxPaginationButtons = 6;
  const pagesToShow = [];

  if (totalPages <= maxPaginationButtons) {
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPaginationButtons / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPaginationButtons / 2) - 1;
    let startPage = currentPage - maxPagesBeforeCurrentPage;
    let endPage = currentPage + maxPagesAfterCurrentPage;

    if (startPage < 1) {
      endPage = endPage + (1 - startPage);
      startPage = 1;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - maxPaginationButtons + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(i);
    }
  }
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div>
      <Head>
        <title>Buses - Transport Route BD</title>
        <meta name="description" content="Browse the bus list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <>
          <div className="flex items-center justify-center p-12">
            <ScaleLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={isLoading}
            />
          </div>
        </>
      ) : (
        <>
          <p className="text-center py-2">Items Per Page</p>
          <div className="flex items-center justify-center">
            <select
              value={perPage}
              onChange={handlePerPageChange}
              className="block border border-gray-300 rounded px-4 py-2 mb-4"
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="15">15</option>
            </select>
          </div>
          <div className="flex justify-center items-center mb-2">
            <BsFillInfoCircleFill className="mr-2 text-xl" />
            <span className="text-gray-700 text-2xl font-bold dark:text-white">
              Total {totalCount} Bus Found
            </span>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center">
            {buses.map((bus) => (
              <BusDetailsCard key={bus._id} bus={bus} />
            ))}
          </div>
          <div>
            <p className="text-center">
              Total Pages {totalPages}. You are on {currentPage}
            </p>
            <div className="flex items-center justify-center my-4">
              {pagesToShow.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled={page === currentPage}
                  className={`mx-1 px-4 py-2 rounded-lg ${
                    page === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}
              {currentPage !== totalPages && (
                <p className="text-center mx-1 px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">
                  ....
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default index;
