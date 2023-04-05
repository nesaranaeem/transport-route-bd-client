import Statistics from "@/components/statistics/Statistics";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div>
      <Head>
        <title>Statistics - Transport Route BD</title>
        <meta name="description" content="Browse the Statistics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Statistics />
    </div>
  );
};

export default index;
