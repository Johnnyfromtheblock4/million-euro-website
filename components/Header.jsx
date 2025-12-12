import React from "react";

const Header = () => {
  return (
    <>
      {/* Top Header */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light mx-2">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Buy Pixel
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pixel list
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
