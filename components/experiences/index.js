import React from "react";
import { myresume } from "../../utils/data";
import AboutMe from "./AboutMe";
import Educations from "./Educations";
import Myjobs from "./Myjobs";
import SelfProjects from "./SelfProjects";
import { FcPrint } from "react-icons/fc";

export default function LeftSection() {
  return (
    <div className="experiences-desktop">
      <AboutMe myresume={myresume.me} />
      <Educations myresume={myresume} />
      <Myjobs myresume={myresume.work_experiences} />
      <SelfProjects myresume={myresume.self_projects} />
      <div className="print-place">
        <FcPrint
          className="print-button"
          onClick={() => window.print()}
        ></FcPrint>
      </div>
    </div>
  );
}
