import React from "react";
import resume from '../assests/Axel-Irias.pdf'

export default function Resume () {
    return (
    <div>
      <div className="row resume text-center">
        <a href={ resume } style={{ fontSize: 50 }} download>Download my resume</a>
        <div
          className="col-6 d-flex justify-content-center skillset"
          style={{ fontSize: 40, fontStyle: "italic" }}
        >
          Front-end Skils
        </div>
        <div
          className="col-6 d-flex justify-content-center skillset"
          style={{ fontSize: 40, fontStyle: "italic" }}
        >
          Back-end Skils
        </div>
          <div className="col-6 skillList"   style={{ fontSize: 30 }}>
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript</ul>
            <ul>jQuery</ul>
            <ul>Responsive Design</ul>
            <ul>React</ul>
            <ul>Bootstrap</ul>
          </div>
          <div
            className="col-6"
            style={{ fontSize: 30 }}
          >
            <ul>APIs</ul>
            <ul>Node</ul>
            <ul>Express</ul>
            <ul>MySQL, Sequelize</ul>
            <ul>MongoDB, Mongoose</ul>
            <ul>REST</ul>
            <ul>GraphQL</ul>
          </div>
        </div>
      </div>
  );
}