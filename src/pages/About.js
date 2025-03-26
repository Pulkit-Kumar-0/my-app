import React from "react";
import "./Page.css";

function About() {
  return (
    <div className="page">
      <h2>About Us</h2>
      <img
        src="https://via.placeholder.com/300x200"
        alt="About Us"
        className="page-image"
      />
      <p>We are a company dedicated to creating great applications.</p>
    </div>
  );
}

export default About;
