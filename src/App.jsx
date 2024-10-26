import './App.css';

import headerImage from "./assets/img/headerImage.jpg";
import aboutMeImage from "./assets/img/aboutMeImage.jpg";
import blooketLeaderboard from "./assets/img/blooketLeaderboard.jpg";
import crystalClicker from "./assets/img/crystalClicker.png";
import schoolCertificate from "./assets/img/schoolCertificate.jpg";
import certiportCertificate1 from "./assets/img/certiportCertificate1.png";
import certiportCertificate2 from "./assets/img/certiportCertificate2.png";
import contactHeaderImage from "./assets/img/contactHeaderImage.jpg";

export function Home() {
  return (
    <>
      <header>
        <div className="flex around">
          <div>
            <div className="section-alt round">
              <img id="header-image" className="round" src={headerImage} alt="Header Image" title="Yes I have red contacts. No I'm not high in this picture."></img>
            </div>
          </div>
          <div>
            <div className="flex column around center">
              <div>
                <h1>Austin Isidoro-Rossini</h1>
                <h2>Programmer and Web Developer</h2>
              </div>
              <div>
                <p className="split center">I create simple interactive websites for people who want a clean and modern look. I excel at using html5 to create websites that look and feel great.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="about-background-image" className="flex column center vertical-center">
        <h1>About Me</h1>
        <br></br>
        <div className="section round">
          <p>My name is Austin Isidoro-Rossini. I'm a programmer with a strong passion for learning and creating. Starting in 5th grade, I've learned to code in a variety of languages, including JavaScript, React, and C#. Overcoming challenges is part of what I do, and I work to make our pro... <a href="./about">Continue Reading -&gt;</a></p>
        </div>
      </div>
    </>
  );
}

export function About() {
  return (
    <>
      <header>
        <h1 className="center">About Me</h1>
      </header>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={aboutMeImage} alt="About Me Image"></img>
        <div className="section-alt center flex vertical-around">
          <h3>My name is Austin Isidoro-Rossini. I'm a programmer with a strong passion for learning and creating. Starting in 5th grade, I've learned to code in a variety of languages, including JavaScript, React, and C#. Overcoming challenges is part of what I do, and I work to make our problems into your success.</h3>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i className="fa-regular fa-handshake"></i>
              <h2>Teamwork</h2>
            </div>
            <div className="flex split center vertical-center">I work well with others in a work environment.</div>
          </div>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i className="fa-regular fa-user"></i>
              <h2>Leadership</h2>
            </div>
            <div className="flex split center vertical-center">I am able to take control of a situation and lead others to success.</div>
          </div>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i className="fa-regular fa-comment"></i>
              <h2>Open Minded</h2>
            </div>
            <div className="flex split center vertical-center">I'm able to take criticism and feedback well, and I'm able to apply that feedback into my work.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Projects() {
  return (
    <>
      <header>
        <h1 className="center">My Projects</h1>
        <h3 className="center">Here are my projects that I created.</h3>
      </header>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={blooketLeaderboard} alt="Blooket Leaderboards"></img>
        <div className="section-alt split center">
          <h1>Blooket Leaderboards</h1>
          <br></br>
          <h3>A website inspired by blooket that allows you to upload your blooket stats and comapre them with others. It ranks these players based on how well you do, and it updates automatically apon user upload. You can also try to break world records with video proof, giving more insentive to participate.</h3>
          <br></br>
          <a href="https://booyaalex.github.io/Blooket-Leaderboards/" target="_blank">Check out the website here!</a>
        </div>
      </div>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={crystalClicker} alt="Crystal Clicker"></img>
        <div className="section-alt split center">
          <h1>Crystal Clicker</h1>
          <br></br>
          <h3>A basic clicker game I created in JavaScript. Click the crystal to get crystals, and spend those crystals to get upgrades to get more crystals.</h3>
          <br></br>
          <a href="https://booyaalex.github.io/Clicker-Project/" target="_blank">Play the game here!</a>
        </div>
      </div>
    </>
  );
}

export function Resume() {
  return (
    <>
    </>
  );
}

export function Certification() {
  return (
    <>
      <header>
        <h1 className="center">My Certificates</h1>
        <h3 className="center">Here are my Awards and Certificates that show off my abilities.</h3>
      </header>
      <div className="flex around">
        <div className="certificate center section round">
          <img className="round" src={schoolCertificate} alt="School Certificate"></img>
          <h1>Certificate of Achievement</h1>
          <h3>Most Outstanding: Programming and Web Development</h3>
        </div>
        <div className="certificate center section round">
          <img className="round" src={certiportCertificate1} alt="Certiport Certificate"></img>
          <h1>HTML and CSS Certification</h1>
          <h3>Information Technology Specialist in HTML and CSS</h3>
        </div>
        <div className="certificate center section round">
          <img className="round" src={certiportCertificate2} alt="Certiport Certificate"></img>
          <h1>Javascript Certification</h1>
          <h3>Information Technology Specialist in Javascript</h3>
        </div>
      </div>
    </>
  );
}

export function Contact() {
  return (
    <>
      <header>
        <div className="flex evenly">
          <div>
            <div className="section-alt round">
              <img id="header-image" className="round" src={contactHeaderImage} alt="Header Image"></img>
            </div>
          </div>
          <div>
            <div className="flex column around center">
              <div>
                <h1>Contact Me</h1>
                <h2>I'm more than happy to hear from you!</h2>
              </div>
              <div>
                <h3>You can reach me from:</h3>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="section round center">
        <div className="flex vertical-center between">
          <div className="flex vertical-center">
            <i className="fa-solid fa-phone"></i>
            <h2>Phone</h2>
          </div>
          <a href="tel:7742311759">(774)-231-1759</a>
        </div>
        <div className="flex vertical-center between">
          <div className="flex vertical-center">
            <i className="fa-solid fa-envelope"></i>
            <h2>Home Email</h2>
          </div>
          <a href="mailto:isidororossinia@gmail.com">isidororossinia@gmail.com</a>
        </div>
        <div className="flex vertical-center between">
          <div className="flex vertical-center">
            <i className="fa-solid fa-envelope"></i>
            <h2>School Email</h2>
          </div>
          <a href="mailto:aisidororossini2027@jpkeefehs.org" target="_blank">aisidororossini2027@jpkeefehs.org</a>
        </div>
      </div>
    </>
  );
}
