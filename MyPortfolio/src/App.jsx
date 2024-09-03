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
    <></>
  );
}

export function Reference() {
  return (
    <></>
  );
}

export function Certification() {
  return (
    <></>
  );
}

export function Contact() {
  return (
    <></>
  );
}
