import React from "react";

export default function Myjobs({ myresume }) {
  return (
    <div>
      <h3>سوابق شغلی</h3>
      <p className="gray">از سال ۱۳۹۸ تا به امروز</p>
      <div className="work-experiences-container">
        {myresume
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
