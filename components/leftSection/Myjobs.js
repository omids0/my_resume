import React from "react";

export default function Myjobs({ myresume }) {
  return (
    <div>
      <h3>سوابق شغلی</h3>
      <p className="gray">از سال ۱۳۹۸ تا به امروز</p>
      <div className="work-experiences-container">
        {myresume.work_experiences.map((item, i) => (
          <div key={i}>
            <p className="bold mys">{item.name} / <span className="gray">{item.location}</span></p>
            <ul className="job-desc-list">
              {item.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )).reverse()}
      </div>
    </div>
  );
}
