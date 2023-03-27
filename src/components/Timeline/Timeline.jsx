import React from "react";
import { cv } from "../../Data";
import Card from "./Card";
import './timeline.css'
const Timeline = () => {
  return (
    <section className="timeline section" id="timeline">
      <h2 className="section-title text-cs">Qualification</h2>
      <p className="section-subtitle">
        My <span>Journey</span>
      </p>
      <div className="timeline-container container grid">
        <div className="timeline-group">
          <h3 className="timeline-heading">Education</h3>
          <div className="timeline-items">
            {cv.map((val, id) => {
              if (val.category === "education") {
                // console.log(val.subtitle);
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="timeline-group">
          <h3 className="timeline-heading">Experience</h3>
          <div className="timeline-items">
            {cv.map((val, id) => {
              if (val.category === "experience") {
                // console.log(val.subtitle);
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
