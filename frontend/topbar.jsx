import React from "react";

export default function TopBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        {/* Logo / Brand */}
        <a className="navbar-brand fw-bold text-primary" href="/">
          MakerMeetsMuse 
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links + Search */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Left side: Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/manufacturers">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Right side: Search + User */}
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search manufacturers..."
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

          <div>
            <a href="/login" className="btn btn-primary me-2">
              Login
            </a>
            <a href="/register" className="btn btn-outline-secondary">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

