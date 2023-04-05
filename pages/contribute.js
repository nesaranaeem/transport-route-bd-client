import Head from "next/head";

const contribute = () => {
  return (
    <div>
      <Head>
        <title>Contribute - Transport Route BD</title>
        <meta name="description" content="Contribute to this project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p3 className="pt-5 text-gray-700 text-2xl font-bold dark:text-white">
        Contribute
      </p3>
      <p className="text-gray-700 text-base dark:text-white text-left py-4">
        This project is developed with the aim of help the people to find bus
        services easily. Should you wish to extend your support towards
        enhancing the quality of this site, i kindly invite you to contribute by
        providing any missing information or notifying us of any inaccuracies.
        Your valuable assistance in this regard would be greatly appreciated.
      </p>
      <p className="text-gray-700 font-bold text-base dark:text-white text-left py-2">
        How to contribute
      </p>
      <p className="text-gray-700 text-base dark:text-white text-left py-2">
        Currently contribution system is not available. i have plan to implement
        in future
      </p>
      <div className="text-gray-700 text-base font-semibold dark:text-white text-left">
        <p>Thanks,</p>
        <p>Nesar Ahmed Naeem</p>
        <p>Developer</p>
      </div>
    </div>
  );
};

export default contribute;
