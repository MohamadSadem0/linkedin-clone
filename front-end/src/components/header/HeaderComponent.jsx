import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">LinkedIn Clone</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">My Network</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Messaging</a>
          </li>
          <li>
            <a href="#">Notifications</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
