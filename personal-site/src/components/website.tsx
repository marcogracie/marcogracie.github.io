import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import LandingPage from "./main/landingPage";
import ProjectPage from "./main/projectPage";
//import ContactPage from "./main/contactPage";
import FunPage from "./main/funPage";

/**
 * Represents the main component of the site.
 */
const Website = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/fun" element={<FunPage />} />
      </Route>
    </Routes>
  );
};

export default Website;
