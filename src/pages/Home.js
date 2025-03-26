import React from "react";
import "./Page.css";

function Home() {
  return (
    <div className="page">
      <h2>Welcome to MyApp</h2>
      <img
        src="https://via.placeholder.com/300x200"
        alt="Welcome"
        className="page-image"
      />
      <p>This is the home page of our awesome application!</p>
    </div>
  );
}

export default Home;
