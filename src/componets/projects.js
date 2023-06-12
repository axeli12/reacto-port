import React from "react";
import jate from '../images/jate.png';
import blog from '../images/blog.png';
import note from '../images/11-express-homework-demo-01.png';
import movie from '../images/movie.png';
import quiz from '../images/quiz.png';
import weather from '../images/weather.png';
import ghub from '../images/github-mark.png';
import think from '../images/thinker.png';

export default function Projects() {
    return (
    <div>
    <div className="text-center" style={{ fontSize: 50 }}>
      Projects
    </div>
    <div className="container">
      <div className="row">
        <div className="col-6 d-flex justify-content-center project">
          <div className="image">
            <img
              src={jate}
              alt="jate"
              className="img-fluid"
            />
            <span className="text-overlay">
              <a href="https://tranquil-retreat-62982.herokuapp.com/">
                Jate text editor
              </a>
              <a href="https://github.com/axeli12/-PWA-Text-Editor">
                <img src={ghub} alt="github" className="tinyLogo" />
              </a>
            </span>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <div className="image">
            <img src={blog} alt="blog" className="img-fluid" />
            <div className="text-overlay">
              <a href="https://intense-island-90811.herokuapp.com/">
                Movie Blog
              </a>
              <a href="https://github.com/IaroslavLasiichuk/movie-blog">
                <img src={ghub} alt="github" className="tinyLogo" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <div className="image">
            <img src={note} alt="Notes App" className="img-fluid" />
            <div className="text-overlay">
              <a href="b">
                Express Notes App
              </a>
              <a href="https://github.com/axeli12/express-note-taker">
                <img src={ghub} alt="github" className="tinyLogo" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <div className="image">
            <img src={movie} alt="movie" className="img-fluid" />
            <div className="text-overlay">
              <a href="https://jacobz96.github.io/movie-tracker/">
                Movie Tracker
              </a>
              <a href="https://github.com/JacobZ96/movie-tracker">
                <img src={ghub} alt="github" className="tinyLogo" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <div className="image">
            <img src={weather} alt="Weather Search" className="img-fluid" />
            <div className="text-overlay">
              <a href="https://axeli12.github.io/weather-dash/">
                Weather Search
              </a>
              <a href="https://github.com/axeli12/weather-dash">
                <img src={ghub} alt="github" className="tinyLogo" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <div className="image">
            <img
              src={quiz}
              alt="quiz"
              className="img-fluid"
            />
            <div className="text-overlay">
              <a href="https://axeli12.github.io/week4-quiz/">
                JavaScript quiz
              </a>
              <a href="https://github.com/axeli12/week4-quiz">
                <img src={ghub} alt="github" className="tinyLogo" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <div className="image">
            <img 
            src={think}
            alt="thinker"
            className="img-fluid"
            />
            <div className="text-overlay">
              <a href="https://salty-eyrie-98942.herokuapp.com/">
                Thinker

              </a>
              <a href="https://github.com/IaroslavLasiichuk/porfolio-i-las-mern">

              <img src={ghub} alt="github" className="tinyLogo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}