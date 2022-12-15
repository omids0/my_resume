import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Languages({ myresume }) {
  return (
    <div className="language-desktop-container">
      <h3>زبان‌ها</h3>
      <div className="w100 flcltr">
        {myresume.map((item, i) => (
          <div key={i} className="progress-bar">
            <p>{item.language}</p>
            <ProgressBar
              completed={item.level}
              bgColor="#00bfff"
              width="100%"
              height="10px"
              labelSize="8px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
