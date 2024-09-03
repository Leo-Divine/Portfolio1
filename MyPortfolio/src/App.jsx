import './App.css';

export function Home() {
  return (
    <>
      <div className="flex evenly">
        <div>
          <img id="header-image" src="./src/assets/headerImage.jpg" alt="Header Image" title="Yes I have red contacts. No I'm not high in this picture."></img>
        </div>
        <div>
          <h1>Austin Isidoro-Rossini</h1>
          <p>Put something here idk man.</p>
        </div>
      </div>
      <br></br>
      <div id="about-background-image" className="flex center vertical-center">
        <div className="section round">
          <p>Put something about me here idk. <a href="./about">Continue Reading -&gt;</a></p>
        </div>
      </div>
    </>
  );
}

export function About() {
  return (
    <></>
  );
}

export function Projects() {
  return (
    <>
      <h1 className="center">My Projects</h1>
      <h3 className="center">Here are my projects that I created.</h3>
      <br></br>
      <div className="flex evenly">
        <div className="project center">
          <a href="https://blooket.games" target="_blank">
            <img className="round" src="./src/assets/blooketLeaderboard.png" alt="Blooket Leaderboards"></img>
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
      <h1 className="center">My Certificates</h1>
      <h3 className="center">Here are my Awards and Certificates that show off my abilities.</h3>
      <br></br>
      <div className="certificate flex evenly">
        <div>
          <a href="./src/assets/schoolCertificate.jpg" target="_blank">
            <img className="center" src="./src/assets/schoolCertificate.jpg" alt="School Certificate"></img>
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
          <a href="./src/assets/certiportCertificate.png" target="_blank">
            <img className="center" src="./src/assets/certiportCertificate.png" alt="School Certificate"></img>
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
