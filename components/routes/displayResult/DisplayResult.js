import { useState, useEffect } from "react";
const DisplayResult = ({ from, to }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://transport-route-bd-server.vercel.app/api/v1/bus?from=${from}&to=${to}`
      );
      const json = await res.json();
      setData(json);
      setLoading(false);
    }

    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      {/* {data?.map((data) => {
        data.englishName;
      })} */}
    </div>
  );
};

export default DisplayResult;
