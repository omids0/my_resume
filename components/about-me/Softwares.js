import React from "react";
import { getUserLang } from "../../utils/methods";

export default function Softwares({ myResume }) {
  const lang = getUserLang() ?? "IR";

  return (
    <div className="software-desktop-container">
      <h3>{lang === "IR" ? "توانایی‌ها" : "Skills"}</h3>
      <div className="w100 flcltr">
        {myResume.map((item, i) => (
          <div key={i} className="progress-bar">
            <p>- {item.tool}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
