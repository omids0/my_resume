import React, { useEffect, useState } from "react";
import Head from "next/head";
import AboutMe from "./about-me";
import MyExperiences from "./experiences";
import { checkIpAPI } from "../api";
import Cookies from "js-cookie";

export default function MyResume() {
  const [lang, setLang] = useState("IR");
  const [state, setState] = useState(false);

  useEffect(() => {
    checkIpAPI()
      .then(({ data }) => {
        if (data.success == true && data.country == "Iran") {
          setLang("IR");
          Cookies.set("user-lang", "IR");
          setState(true);
        } else if (data.success == true && data.country !== "Iran") {
          setLang("EN");
          Cookies.set("user-lang", "EN");
          setState(true);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  if (!state) {
    return <>Loading...</>;
  }

  return (
    <div style={{ direction: lang === "IR" ? "rtl" : "ltr" }}>
      <Head>
        <title>Omid SoheilNia</title>
        <meta name="description" content="رزومه امید سهیل‌ نیا" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-container-desktop">
        <AboutMe />
        <MyExperiences />
      </div>
    </div>
  );
}
