import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Top Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-2">
        <a className="navbar-brand" href="#">
          OneMillion€uroWebsite
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Homepage
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buy">
                Buy Pixel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pixels">
                Pixel List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
