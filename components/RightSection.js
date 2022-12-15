import React from "react";
import { myresume } from "../utils/data";
import Contacts from "./rightSection/Contacts";
import Intrests from "./rightSection/Intrests";
import Languages from "./rightSection/Languages";
import Softwares from "./rightSection/Softwares";
import { FcPrint } from "react-icons/fc";

export default function RightSection() {
  return (
    <div className="skills-desktop">
      <Contacts myresume={myresume.me} />
      <Intrests myresume={myresume.me.intrests} />
      <Languages myresume={myresume.languages} />
      <Softwares myresume={myresume.skills} />
      <FcPrint
        className="print-button"
        onClick={() => window.print()}
      ></FcPrint>
    </div>
  );
}
