import React, { useState, useEffect } from "react";
import "./index.css";

/**
 * ProjectPage Component renders the project page of the website
 */
const ProjectPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    const scrollHeight = window.innerHeight;
    const index = Math.floor(scrollTop / scrollHeight);
    setActiveIndex(index);
  };

  return (
    <div className="projects" onScroll={handleScroll}>
      <div className="project"> Project 1 </div>
      <div className="project"> Project 2 </div>
      <div className="project"> Project 3 </div>
      <div className="dots">
        <span className={`dot ${activeIndex === 0 ? "active" : ""}`}></span>
        <span className={`dot ${activeIndex === 1 ? "active" : ""}`}></span>
        <span className={`dot ${activeIndex === 2 ? "active" : ""}`}></span>
      </div>
    </div>
  );
};

export default ProjectPage;
