import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import CollapseData from "../datas/collapses.json"

const About = () => {
  return (
    <div className="about">
      <Header />
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
      <Footer />
    </div>
  );
};

export default About;
