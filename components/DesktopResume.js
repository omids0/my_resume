import React from "react";
import Head from "next/head";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

export default function DesktopResume() {
  return (
    <div>
      <Head>
        <title>Omid SoheilNia</title>
        <meta name="description" content="رزومه امید سهیل‌نیا" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-container-desktop">
        <RightSection />
        <LeftSection />
      </div>
    </div>
  );
}
