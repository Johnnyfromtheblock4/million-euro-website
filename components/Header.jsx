import React from "react";

const Header = () => {
  return (
    <>
      {/* Top Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-2">
        <a className="navbar-brand" href="#">
          Navbar
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
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Buy Pixel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pixel list
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
