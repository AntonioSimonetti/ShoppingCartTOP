import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "./images/gitHubLogo.svg";

function Homepage() {
  return (
    <div className="homepageDiv" data-testid="homepage">
      <h1 className="headerHomepage">LEVEL UP YOUR GAMING EXPERIENCE</h1>
      <p className="headerTwoHomepage">
        Improve your skills with the best components on the market
      </p>
      <Link to="Shop">
        <button className="buttonHomepage">Shop Now!</button>
      </Link>

      <div className="footerHomepage">
        <p>Created by: Totino</p>
        <a href="https://github.com/AntonioSimonetti">
          <img src={githubLogo} alt="GitHub logo" className="githubLogo" />
        </a>
      </div>
    </div>
  );
}

export default Homepage;
