import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Softwares({ myresume }) {
  return (
    <div className="software-desktop-container">
      <h3>نرم‌افزارها</h3>
      <div className="w100 flcltr">
        {myresume.map((item, i) => (
          <div key={i} className="progress-bar">
            <p>{item.tool}</p>
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
