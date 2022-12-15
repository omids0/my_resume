import React from "react";

export default function AboutMe({ myresume }) {
  return (
    <div className="about-me-desktop">
      <h1>{myresume.name}</h1>
      <h2 className="ltr aboutmejob">{myresume.job}</h2>
    </div>
  );
}
