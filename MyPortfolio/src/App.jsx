import './App.css';

export function Home() {
  return (
    <>
      <header>
        <div className="flex evenly">
          <div>
            <div className="section-alt round">
              <img id="header-image" className="round" src="./src/assets/img/headerImage.jpg" alt="Header Image" title="Yes I have red contacts. No I'm not high in this picture."></img>
            </div>
          </div>
          <div>
            <div className="flex column around center">
              <div>
                <h1>Austin Isidoro-Rossini</h1>
                <h2>Programmer and Web Developer</h2>
              </div>
              <div>
                <p>I create simple interactive websites for people who want a clean and modern look. I excel at using html5 to create websites that look and feel great.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="about-background-image" className="flex column center vertical-center">
        <h1>About Me</h1>
        <br></br>
        <div className="section round">
          <p>My name is Austin Isidoro-Rossini. I'm a programmer with a strong passion for learning and creating. Starting in 5th grade, I've learned to code in a variety of languages, including html, js, and react. Overcoming challenges is part of what I do, and I work to make our pro... <a href="./about">Continue Reading -&gt;</a></p>
        </div>
      </div>
    </>
  );
}

export function About() {
  return (
    <>
      <header className="title">
        <h1 className="center">About Me</h1>
      </header>
      <div className="flex nowrap">
        <img id="about-me-image" src="./src/assets/img/aboutMeImage.jpg" alt="About Me Image"></img>
        <div className="section-alt center flex vertical-around">
          <h3>My name is Austin Isidoro-Rossini. I'm a programmer with a strong passion for learning and creating. Starting in 5th grade, I've learned to code in a variety of languages, including html, js, and react. Overcoming challenges is part of what I do, and I work to make our problems into your success.</h3>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i className="fa-regular fa-handshake"></i>
              <h2>Teamwork</h2>
            </div>
            <div className="flex split center vertical-center">I work well with others in a work environment.</div>
          </div>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i class="fa-regular fa-user"></i>
              <h2>Leadership</h2>
            </div>
            <div className="flex split center vertical-center">I am able to take control of a situation and lead others to success.</div>
          </div>
          <div className="section full flex between center round">
            <div className="flex split vertical-center center">
              <i class="fa-solid fa-comment"></i>
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
      <header className="title">
        <h1 className="center">My Projects</h1>
        <h3 className="center">Here are my projects that I created.</h3>
      </header>
      <div className="flex evenly">
        <div className="project center section round">
          <a href="https://blooket.games" target="_blank">
            <img className="round" src="./src/assets/img/blooketLeaderboard.png" alt="Blooket Leaderboards"></img>
          </a>
          <h2>Blooket Leaderboards</h2>
          <p>A website inspired by blooket that allows you to upload your blooket stats and comapre them with others.</p>
        </div>
      </div>
    </>
  );
}

export function Reference() {
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
      <div className="certificate flex evenly">
        <div>
          <a href="./src/assets/img/schoolCertificate.jpg" target="_blank">
            <img className="center" src="./src/assets/img/schoolCertificate.jpg" alt="School Certificate"></img>
          </a>
        </div>
        <div>
          <h3 className="center">Certificate of Achievement: Most Outstanding (Programming & Web)</h3>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="certificate flex evenly">
        <div>
          <a href="./src/assets/img/certiportCertificate.png" target="_blank">
            <img className="center" src="./src/assets/img/certiportCertificate.png" alt="School Certificate"></img>
          </a>
        </div>
        <div>
          <h3 className="center">HTML and CSS Certification</h3>
        </div>
      </div>
    </>
  );
}

export function Contact() {
  return (
    <></>
  );
}
