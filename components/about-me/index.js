import React from "react";
import { myResumeData } from "../../utils/data";
import Contacts from "./Contacts";
import Languages from "./Languages";
import Softwares from "./Softwares";
import { getUserLang } from "../../utils/methods";

export default function RightSection() {
  const lang = getUserLang() ?? "IR";

  return (
    <div className="skills-desktop">
      <Contacts myResume={myResumeData[lang].me} />
      <Languages myResume={myResumeData[lang].languages} />
      <Softwares myResume={myResumeData[lang].skills} />
    </div>
  );
}
