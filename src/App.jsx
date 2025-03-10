import { Octokit } from '@octokit/rest';
import { useState, useEffect } from 'react';
import './App.css';

import headerImage from "./assets/img/headerImage.jpg";
import aboutMeImageTwo from "./assets/img/aboutMeImageTwo.png";
import blooketLeaderboard from "./assets/img/blooketLeaderboard.png";
import crystalClicker from "./assets/img/crystalClicker.png";
import musicApp from "./assets/img/musicApp.png";
import matchThreeGame from "./assets/img/matchThreeGame.png";
import flappyBird from "./assets/img/flappyBird.png";
import calculatorApp from "./assets/img/calculatorApp.png";
import ticTacToeGame from "./assets/img/ticTacToeGame.png";
import schoolCertificate from "./assets/img/schoolCertificate.jpg";
import certiportCertificate1 from "./assets/img/certiportCertificate1.png";
import certiportCertificate2 from "./assets/img/certiportCertificate2.png";
import contactHeaderImage from "./assets/img/contactHeaderImage.jpg";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GIT_API_KEY
});

export function Home() {
  return (
    <>
      <header>
        <div className="flex evenly">
          <div>
            <div className="section-alt round center">
              <img id="header-image" className="round" src={headerImage} alt="Header Image" title="Yes I have red contacts. No I'm not high in this picture."></img>
            </div>
          </div>
          <div className="split">
            <div className="flex column around center text-center">
              <div>
                <h1>Austin Isidoro-Rossini</h1>
                <h2>Programmer and Web Developer</h2>
              </div>
              <div>
                <p>The Man with the Plan.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="about-background-image" className="flex column center vertical-between">
        <div className="flex evenly text-center">
          <div className="bubble center section round">
            <h1>About Me</h1>
            <p>My name is Austin Isidoro-Rossini. I&apos;m a programmer with a strong passion for learning and creating. Starting in 5th grade, I&apos;ve learned to code in a variety of languages, including JavaScript, C#, Java, and I've dabbled in plenty of others. Overcoming challenges is part of wha... <a href="./about">Continue Reading -&gt;</a></p>
          </div>
          <div className="bubble center section round">
            <h1>My Hobbies</h1>
            <p>Some of my hobbies include listening to music, reading, and coding. I enjoy spending time with family and friends, and I take time to spend some time with them. I like playing tennis, and do so weekly.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function About() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getTopLanguages().then((response) => {
      const entries = [...response.entries()];
      entries.sort((a, b) => b[1] - a[1]);

      const text_elements = [];
      const chart_elements = [];

      let total_language = 0;
      for (const value of response.values()) {
        total_language += value;
      }
      for (const [key, value] of entries) {
        text_elements.push(
          <p key={key}>
            {key}: {((value / total_language) * 100).toFixed(2)}%
          </p>
        );
      }

      makeDonut(entries, total_language);

      setState(text_elements);
    });
  }, []);

  function makeDonut(entries, total_language) {
    const canvas = document.getElementById("donut-chart");
    const ctx = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;

    const COLORS = {
      'JavaScript': '#f1e05a',
      'C#': '#178600',
      'CSS': '#663399',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'HTML': '#e34c26',
      'Python': '#3572A5',
      'Rust': '#dea584'
    };

    const CX = canvas.width / 2;
    const CY = canvas.height / 2;
    const RADIUS = 75;
    const PI = Math.PI;
    const PI2 = PI * 2;
    const OFFSET = -PI / 2;
    let accum = 0;
    ctx.lineWidth = 25;
    for (const [key, value] of entries) {
      ctx.beginPath();
      ctx.arc(CX, CY, RADIUS,
        OFFSET + PI2 * (accum / total_language),
        OFFSET + PI2 * ((accum + value) / total_language)
      );
      ctx.strokeStyle = COLORS[key];
      ctx.stroke();
      accum += value;
    }
  }

  return (
    <>
      <header>
        <h1 className="text-center">About Me</h1>
      </header>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={aboutMeImageTwo} alt="About Me Image"></img>
        <div className="section-alt center flex vertical-around">
          <h3>My name is Austin Isidoro-Rossini. I&apos;m a programmer with a strong passion for learning and creating. Starting in 5th grade, I&apos;ve learned to code in a variety of languages, including JavaScript, C#, Java, and I've dabbled in plenty of others. Overcoming challenges is part of what I do, and I work to make our problems into your success.</h3>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i className="fa-regular fa-handshake"></i>
              <h2>Teamwork</h2>
            </div>
            <div className="flex split center vertical-center">
              <p className="text-center">I&apos;m capable of working with others in a professional work environment.</p>
            </div>
          </div>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i className="fa-regular fa-user"></i>
              <h2>Leadership</h2>
            </div>
            <div className="flex split center vertical-center">
              <p className="text-center">I&apos;m able to take control of a situation help lead others to success.</p>
            </div>
          </div>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i className="fa-regular fa-comment"></i>
              <h2>Open Minded</h2>
            </div>
            <div className="flex split center vertical-center">
              <p className="text-center">I&apos;m able to take criticism and feedback well, and I&apos;m able to apply that feedback into my work.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section round center">
        <h2 className="text-center">Here are my Most Used Languages</h2>
        <div className="flex split center around">
          <div>
            {state}
          </div>
          <canvas id="donut-chart"></canvas>
        </div>
      </div>
    </>
  );
}

export function Projects() {
  return (
    <>
      <header>
        <h1 className="text-center">My Projects</h1>
        <h3 className="text-center">Here are some projects that I&apos;ve created.</h3>
      </header>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={blooketLeaderboard} alt="Blooket Leaderboards"></img>
        <div className="section-alt split center text-center">
          <h1>Blooket Leaderboards</h1>
          <br></br>
          <h3>A website inspired by blooket that allows you to upload your blooket stats and comapre them with others. It ranks these players based on how well you do, and it updates automatically apon user upload. You can also try to break world records with video proof, giving more insentive to participate.</h3>
          <br></br>
          <a href="https://blooket-leaderboards.pages.dev/" target="_blank">Check out the Website Here!</a>
        </div>
      </div>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={crystalClicker} alt="Crystal Clicker"></img>
        <div className="section-alt split center text-center">
          <h1>Crystal Clicker</h1>
          <br></br>
          <h3>A basic clicker game I created in JavaScript. Click the crystal to get crystals, and spend those crystals to get upgrades to get more crystals.</h3>
          <br></br>
          <a href="https://leo-divine.github.io/Clicker-Project/" target="_blank">Play the Game Here!</a>
        </div>
      </div>
      <div className="duel-container flex nowrap">
        <img className="about-me-image" src={musicApp} alt="The Bester Music App"></img>
        <div className="section-alt split center text-center">
          <h1>The Bester Music App</h1>
          <br></br>
          <h3>An application I created in C# that lets you play music from your music folder. It allows you to look up and play music, as well as create playlists. It uses SQLite to manage your music quickly and efficently.</h3>
          <br></br>
          <a href="https://github.com/leo-divine/TheBesterMusicApp/archive/refs/tags/v1.2.0.3.zip" target="_self">Download the Application Here!</a>
        </div>
      </div>
      <div className="flex around text-center">
        <div className="bubble center section round">
          <img className="round" src={matchThreeGame} alt="Match 3 Game"></img>
          <h1>Match 3 Game</h1>
          <h3>A simple version of a match 3 game made in JavaScript. The game is similar to Candy Crush.</h3>
          <a href="https://leo-divine.github.io/Match-3-Game/" target="_blank">Play the Game Here!</a>
        </div>
        <div className="bubble center section round">
          <img className="round" src={flappyBird} alt="Flappy Bird"></img>
          <h1>Flappy Birb</h1>
          <h3>A simplified version of the game Flappy Bird made in JavaScript created for showcases.</h3>
          <a href="https://leo-divine.github.io/Flappy-Birb/" target="_blank">Play the Game Here!</a>
        </div>
        <div className="bubble center section round">
          <img className="round" src={calculatorApp} alt="Calculator App"></img>
          <h1>Calculator App</h1>
          <h3>A calculator app I made in Java to learn the language.</h3>
          <a href="https://github.com/leo-divine/Calculator" target="_blank">See the Code Here!</a>
        </div>
        <div className="bubble center section round">
          <img className="round" src={ticTacToeGame} alt="Tic Tac Toe Game"></img>
          <h1>Tic Tac Toe Game</h1>
          <h3>A recreation of the Tic Tac Toe game I made in Java.</h3>
          <a href="https://github.com/leo-divine/TicTacToe" target="_blank">See the Code Here!</a>
        </div>
      </div>
    </>
  );
}

export function Resume() {
  return (
    <>
      <header>
        <h1 className="text-center">My Resume</h1>
      </header>
      <div className="center section round">
        <div className="text-center">
          <h1>Austin Isidoro-Rossini</h1>
          <p>isidororossinia@gmail.com • 774-231-1759</p>
        </div>
        <h2>Education</h2>
        <div className="flex between">
          <div className="flex">
            <h4>Enrolled at Keefe Tech</h4>
            <p>| Frammingham, MA</p>
          </div>
          <h4>September 2023 - Present</h4>
        </div>
        <p>Current Major: Programming & Web Development</p>
        <p>GPA: 4.092 / 5</p>
        <br></br>
        <h2>Technical Skills</h2>
        <div className="flex">
          <h4>Programming Languages:</h4>
          <p>HTML5, C#, C++, Java, Python</p>
        </div>
        <div className="flex">
          <h4>Database:</h4>
          <p>SQLite</p>
        </div>
        <div className="flex">
          <h4>Software:</h4>
          <p>Visual Studio</p>
        </div>
        <br></br>
        <h2>Work Experience</h2>
        <div className="flex between">
          <div className="flex">
            <h4>BDR Automotive</h4>
            <p>| Janitor & Helper</p>
            <p>| Holliston, MA</p>
          </div>
          <h4>May 2024 - Present</h4>
        </div>
        <ul>
          <li>Contributed to the organization and cleaning of the workspace.</li>
          <li>Gained experience working with others in a productive environment.</li>
        </ul>
        <br></br>
        <h2>Campus and Community Involvement</h2>
        <div className="flex between">
          <div className="flex">
            <h4>Teens A.C.T Club</h4>
            <p>| Member</p>
            <p>| Frammingham, MA</p>
          </div>
          <h4>September 2024 - Present</h4>
        </div>
        <ul>
          <li>Helped to create a positive environment in our school.</li>
          <li>Planned and managed events for volunteering in the community.</li>
        </ul>
        <br></br>
        <div className="flex between">
          <div className="flex">
            <h4>Pearl Street Cupboard Food Pantry</h4>
            <p>| Volunteer</p>
            <p>| Frammingham, MA</p>
          </div>
          <h4>November 2024</h4>
        </div>
        <ul>
          <li>Organized an event to volunteer at a local food pantry.</li>
          <li>Improved productivity by assigning specific jobs to volunteers.</li>
          <li>Packaged food and cleaned the food pantry.</li>
        </ul>
        <br></br>
        <h2>Honors & Awards</h2>
        <ul>
          <li>Keefe Tech
            <ul>
              <li>Keefe Tech Student Ambassador for Programming & Web</li>
              <li>Keefe Tech Certificate of Achievement in Programming & Web</li>
              <li>Keefe Tech High Honor Roll 2023-2024 | Term I - Term III</li>
              <li>Keefe Tech High Honor Roll 2024-2025 | Term I</li>
            </ul>
          </li>
          <li>Certifications
            <ul>
              <li>Certiport HTML & CSS Certification</li>
              <li>Certiport JavaScript Certification</li>
            </ul>
          </li>
          <li>Competitions
            <ul>
              <li>MABPA SLC 2025
                <ul>
                  <li>Fundamentals of Web Design: 1st Place</li>
                  <li>C# Programming: 2nd Place</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <br></br>
        <a href="https://raw.githubusercontent.com/leo-divine/Portfolio1/refs/heads/main/src/assets/Resume.pdf">PDF Version</a>
      </div>
    </>
  );
}

export function Certification() {
  return (
    <>
      <header>
        <h1 className="text-center">My Certificates</h1>
        <h3 className="text-center">Here are my Awards and Certificates that show off my abilities.</h3>
      </header>
      <div className="flex around text-center">
        <div className="bubble center section round">
          <img className="round" src={schoolCertificate} alt="School Certificate"></img>
          <h1>Certificate of Achievement</h1>
          <h3>Most Outstanding: Programming and Web Development</h3>
        </div>
        <div className="bubble center section round">
          <img className="round" src={certiportCertificate1} alt="Certiport Certificate"></img>
          <h1>HTML and CSS Certification</h1>
          <h3>Information Technology Specialist in HTML and CSS</h3>
        </div>
        <div className="bubble center section round">
          <img className="round" src={certiportCertificate2} alt="Certiport Certificate"></img>
          <h1>Javascript Certification</h1>
          <h3>Information Technology Specialist in Javascript</h3>
        </div>
        <div className="bubble center section round">
          <img className="round" src={certiportCertificate1} alt="MABPA 2025 Web Award"></img>
          <h1>MABPA Web Design Award</h1>
          <h3>MABPA SLC 2025 Fundamentals of Web Design</h3>
        </div>
        <div className="bubble center section round">
          <img className="round" src={certiportCertificate2} alt="MABPA 2025 C# Award"></img>
          <h1>MABPA C# Programming Award</h1>
          <h3>MABPA SLC 2025 C# Programming</h3>
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
          <div className="split">
            <div className="flex column around center text-center">
              <div>
                <h1>Contact Me</h1>
                <h2>I&apos;m more than happy to hear from you!</h2>
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
          <a href="tel:7742311759">774-231-1759</a>
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

async function getTopLanguages() {
  let langauges = new Map();
  await octokit.rest.repos.listForUser({
    username: "leo-divine"
  }).then(async (user_repositories) => {
    for (const repo of user_repositories.data) {
      await octokit.request('GET /repos/leo-divine/{repo}/languages', {
        repo: repo.name
      }).then((langauge_data) => {
        for (const [key, value] of Object.entries(langauge_data.data)) {
          if (!langauges.has(key)) {
            langauges.set(key, 0);
          }
          langauges.set(key, langauges.get(key) + value);
        }
      });
    }
  });

  return langauges;
}

