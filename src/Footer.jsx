import './Footer.css';

export function Footer() {
  return (
    <>
      <br></br>
      <footer id="footer" className="section-alt">
        <h3 className="text-center">Austin Isidoro-Rossini</h3>
        <br></br>
        <div className="flex around">
          <div>
            <div className="flex">
              <p>Home Email</p>
              <p><i className="fa-solid fa-envelope"></i></p>
              <p><a href="mailto:isidororossinia@gmail.com" target="_blank">isidororossinia@gmail.com</a></p>
            </div>
            <div className="flex">
              <p>School Email</p>
              <p><i className="fa-solid fa-envelope"></i></p>
              <p><a href="mailto:aisidororossini2027@jpkeefehs.org" target="_blank">aisidororossini2027@jpkeefehs.org</a></p>
            </div>
          </div>
          <div className="flex">
            <a href="https://www.facebook.com/profile.php?id=100091782052102&mibextid=LQQJ4d" target="_blank">
              <i className="fa-brands fa-facebook" title="Facebook"></i>
            </a>
            <a href="https://github.com/booyaalex" target="_blank">
              <i className="fa-brands fa-github" title="Github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}