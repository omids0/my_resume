import React from "react";

export default function Educations({ myResume, lang }) {
  return (
    <div>
      <h3>{lang === "IR" ? "تحصیلات" : "Education"}</h3>
      <p className="bold">{myResume?.education.degree}</p>
      <p className="gray mys">{`${myResume?.education.location} (${myResume?.education.startAt} - ${myResume?.education.endAt})`}</p>
    </div>
  );
}
