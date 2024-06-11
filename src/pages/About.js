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
        {CollapseData.map((item) => {
          return (
            <div className="about__collapse" key={item.id}>
              <Collapse
                content=<p className="about__collapse__content">
                  {item.content}
                </p>
                title={item.title}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default About;
