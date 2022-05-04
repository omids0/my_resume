import React from "react";
import { myresume } from "../utils/data";
import AboutMe from "./leftSection/AboutMe";
import Educations from "./leftSection/Educations";
import Myjobs from "./leftSection/Myjobs";
import SelfProjects from "./leftSection/SelfProjects";

export default function LeftSection() {
  return (
    <div className="experiences-desktop">
      <AboutMe myresume={myresume} />
      <Educations myresume={myresume} />
      <Myjobs myresume={myresume} />
      <SelfProjects myresume={myresume} />
    </div>
  );
}
