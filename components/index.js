import React, { useEffect, useState } from "react";
import Head from "next/head";
import AboutMe from "./about-me";
import MyExperiences from "./experiences";
import { checkIpAPI } from "../api";

export default function MyResume() {
  const [lang, setLang] = useState("IR");

  useEffect(() => {
    checkIpAPI()
      .then(({ data }) => {
        if (data.success == true && data.country == "Iran") {
          setLang("IR");
        } else if (data.success == true && data.country !== "Iran") {
          setLang("EN");
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div style={{ direction: lang === "IR" ? "rtl" : "ltr" }}>
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
