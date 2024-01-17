import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Search from "../app/components/Search";
import React from "react";

const Home = () => {
  return (
    <div className="bg-orange w-full h-full flex justify-center">
      <Head>
        <title>Weather App</title>
        <meta
          name="An app showing weather details"
          content="built with nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Search />
      </Box>
    </div>
  );
};

export default Home;
