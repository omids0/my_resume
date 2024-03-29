import React from "react";

export default function MyJobs({ myResume, lang }) {
  return (
    <div>
      <h3>{lang === "IR" ? "سوابق شغلی" : "Work Experiences"}</h3>
      <p className="gray">
        {lang === "IR" ? "از سال ۱۳۹۸ تا به امروز" : "From 2018 to today"}
      </p>
      <div className="work-experiences-container">
        {myResume
          .map((item, i) => (
            <div key={i}>
              <span className="bold mys">
                {item.name} / <span className="work-time">{item.workTime}</span>
              </span>
              <div className="job-desc-list">
                {item.description.map((item, i) => (
                  <span key={i} className="job-exprienses-item">
                    #{item}
                  </span>
                ))}
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}
