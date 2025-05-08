import "./index.css";
/**
 * LandingPage Component renders the main page of the website
 */
const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="imageContainer">
        <img src="https://picsum.photos/200/300" alt="Marco Gracie" />
      </div>
      <div className="paragraphContainer">
        <p>
          Hi, I'm Marco Gracie. A software developer interested in the
          intersection of Human Interaction and computing, along with AI. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
