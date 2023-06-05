import React from "react";
import Head from "next/head";
import AboutMe from "./about-me";
import MyExperiences from "./experiences";

export default function MyResume() {
  return (
    <div>
      <Head>
        <title>Omid SoheilNia</title>
        <meta name="description" content="رزومه امید سهیل‌نیا" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-container-desktop">
        <AboutMe />
        <MyExperiences />
      </div>
    </div>
  );
}
