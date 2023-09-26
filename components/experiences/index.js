import React from "react";
import { myResume, myResumeData } from "../../utils/data";
import AboutMe from "./AboutMe";
import Educations from "./Educations";
import MyJobs from "./Myjobs";
import SelfProjects from "./SelfProjects";
import { FcPrint } from "react-icons/fc";
import { getUserLang } from "../../utils/methods";

export default function MyExperiencesSection() {
  const lang = getUserLang();

  if (!lang) {
    return <>Loading...</>;
  }

  return (
    <div className="experiences-desktop">
      <AboutMe myResume={myResumeData[lang].me} />
      <Educations myResume={myResumeData[lang]} lang={lang} />
      <MyJobs myResume={myResumeData[lang].work_experiences} lang={lang} />
      <SelfProjects myResume={myResumeData[lang].self_projects} lang={lang} />
      <div className="print-place">
        <FcPrint
          className="print-button"
          onClick={() => window.print()}
        ></FcPrint>
      </div>
    </div>
  );
}
