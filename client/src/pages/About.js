import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us "}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          I am rajesh khandeka, Currently Persuing B.tech Major in Information Technology.
          My Major interest is Web Development And I am also Having Good Knowledge In Web Developement. In a world where change is constant and innovation is paramount, I am
driven to be a force of positive transformation this is my motivation towards my professional life.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
