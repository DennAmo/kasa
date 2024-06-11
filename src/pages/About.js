import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import CollapseData from "../datas/collapses.json";
import BannerAbout from "../assets/bannerabout.jpg";

const About = () => {
  return (
    <main className="pageAbout">
      <Banner image={BannerAbout} />
      <div className="about">
        {CollapseData.map((collapseArray, i) => {
          return (
            <div className="about__collapse" key={i}>
              <Collapse
                content=<p className="about__collapse__content">
                  {collapseArray.content}
                </p>
                title={collapseArray.title}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default About;
