import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="title-container"></div>
      <nav>
        <ul>
          <li>
            <a href="#home">דף הבית</a>
          </li>
          <li>
            <a href="#videos">סרטונים</a>
          </li>
          <li>
            <a href="#map"> מפת נקודות משמעותיות ומסלולים</a>
          </li>
        </ul>
      </nav>
      <div className="right-section">
        <svg
          width="50"
          height="30"
          viewBox="0 0 150 50"
          xmlns="http://www.w3.org/2000/svg"
          className="mountains-icon"
        >
          <path
            d="M 10,90 Q 30,40 50,20 T 90,90"
            stroke="black"
            stroke-width="2"
            fill="none"
          />

          <path
            d="M 75,40 Q 90,10 110,10 T 185,100"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
        </svg>
        <span>באת מהמדבר</span>
      </div>
    </header>
  );
}

export default Header;
