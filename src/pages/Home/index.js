import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="page">
      <h1>Welcome to the Personality Test!</h1>
      <Link to="/test" className="start-button">
        Start Test
      </Link>
    </div>
  );
};

export default HomeScreen;
