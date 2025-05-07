import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import LandingPage from "./main/landingPage";

/**
 * Represents the main component of the site.
 */
const Website = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default Website;
