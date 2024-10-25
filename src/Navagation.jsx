import './Navagation.css';

export function Nav() {
  return (
    <>
      <nav id="nav-bubble" className="flex center vertical-center section-alt">
        <i className="fa-solid fa-caret-right"></i>
        <div id="nav-bar" className="flex column section-alt">
          <a href="./home">Home</a>
          <a href="./about">About</a>
          <a href="./projects">Projects</a>
          <a href="./resume">Resume</a>
          <a href="./certification">Certificats & Awards</a>
          <a href="./contact">Contact</a>
        </div>
      </nav>
    </>
  );
}