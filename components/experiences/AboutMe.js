import React from "react";

export default function AboutMe({ myResume }) {
  return (
    <div className="about-me-desktop">
      <h1>{myResume.name}</h1>
      <h2>{myResume.job}</h2>
    </div>
  );
}
