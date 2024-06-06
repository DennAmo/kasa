import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import CollapseData from "../datas/collapses.json"

const About = () => {
  return (
    <div className="about">
      
      <main>
        <Banner />
          <div className="collapse">
            {CollapseData.map((item) => {
              return (
                <div className="collapse__layout" key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
      </main>

    </div>
  );
};

export default About;
