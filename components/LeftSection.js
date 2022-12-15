import React from "react";
import { myresume } from "../utils/data";
import AboutMe from "./leftSection/AboutMe";
import Educations from "./leftSection/Educations";
import Myjobs from "./leftSection/Myjobs";
import SelfProjects from "./leftSection/SelfProjects";
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
