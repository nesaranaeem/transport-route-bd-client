import Head from "next/head";
import { Inter } from "next/font/google";
import Routes from "@/components/routes/routes/Routes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Transport Route BD</title>
        <meta
          name="description"
          content="Transport Route BD Client side. It request APIs from it's backend. and display result."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Routes />
    </>
  );
}
