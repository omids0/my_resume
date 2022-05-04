import React from "react";
import { myresume } from "../utils/data";
import Contacts from "./rightSection/Contacts";
import Intrests from "./rightSection/Intrests";
import Languages from "./rightSection/Languages";
import Softwares from "./rightSection/Softwares";

export default function RightSection() {
  return (
    <div className="skills-desktop">
      <Contacts myresume={myresume} />
      <Intrests myresume={myresume} />
      <Languages myresume={myresume} />
      <Softwares myresume={myresume} />
    </div>
  );
}
