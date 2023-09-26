import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

export default function SelfProjects({ myResume, lang }) {
  return (
    <div>
      <h3>{lang === "IR" ? "پروژه‌های شخصی" : "Personal projects"}</h3>
      <div>
        {myResume.map((item, i) => (
          <div key={i} className="mypojects-countainer">
            <p className="bold mys">{item.projectName}</p>
            <p className="job-desc">{item.description}</p>
            <div className="job-tools">
              {item.tools.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
            <p className="job-desc2">{item.description2}</p>
            <p className="job-desc3">{item.description3}</p>
            <div className="job-links">
              <div className="job-links-live">
                <a href={item.links.live} target="_blank" rel="noreferrer">
                  {item.links.live}
                </a>
                <FiGlobe className="react-icon" />
              </div>
              <div className="job-links-github">
                <a href={item.links.github} target="_blank" rel="noreferrer">
                  {item.links.github}
                </a>
                <AiFillGithub className="react-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
