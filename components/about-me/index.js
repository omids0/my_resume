import React from "react";
import { myresume } from "../../utils/data";
import Contacts from "./Contacts";
import Intrests from "./Intrests";
import Languages from "./Languages";
import Softwares from "./Softwares";

export default function RightSection() {
  return (
    <div className="skills-desktop">
      <Contacts myresume={myresume.me} />
      {/*<Intrests myresume={myresume.me.intrests} />*/}
      <Languages myresume={myresume.languages} />
      <Softwares myresume={myresume.skills} />
    </div>
  );
}
