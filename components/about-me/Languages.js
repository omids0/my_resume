import React from "react";
import { getUserLang } from "../../utils/methods";

export default function Languages({ myResume }) {
  const lang = getUserLang() ?? "IR";

  return (
    <div className="language-desktop-container">
      <h3>{lang === "IR" ? "زبان‌ها" : "Languages"}</h3>
      <div className="w100 flcltr">
        {myResume.map((item, i) => (
          <div key={i} className="progress-bar">
            <p>{item.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
