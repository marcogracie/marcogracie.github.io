import "./index.css";
import Header from "../header";
import { Outlet } from "react-router-dom";

/**
 * Main layout of website
 */
const Layout = () => (
  <>
    <Header />
    <div id="main" className="main">
      <Outlet />
    </div>
  </>
);

export default Layout;
