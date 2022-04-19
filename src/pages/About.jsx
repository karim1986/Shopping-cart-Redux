import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1>This Page is currently NOT WORKING</h1>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Back
        </button>
      </div>
    </div>
  );
};

export default About;
