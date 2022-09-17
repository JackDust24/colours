import * as React from "react";
import { callAPI } from "../libs/services/index";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ColourContainer from "../libs/components/ColourContainer";

export default function Home() {
  // Button Fetch for Swatch
  const [data, setData] = React.useState<any>([]);
  // API Call for Swatch
  React.useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, []);

  // In a proper project would use React Query
  const fetchData = async () => {
    const jsonObj = await callAPI();
    setData(jsonObj.data);
  };

  const handleColoursFetch = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-emerald-400 text-4xl pb-24">
          Welcome to Colour Swatches
        </h1>

        <ColourContainer data={data} />

        {/* Button */}
        <button
          className="mt-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleColoursFetch}
        >
          Refresh Colours
        </button>
      </main>
    </div>
  );
}
