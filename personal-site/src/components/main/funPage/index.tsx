import "./index.css";
import SlimeMoldScene from "./scenes/slimeMold";

/**
 * FunPage Component renders a page with fun stuff
 */
const FunPage = () => {
  return (
    <div className="funPage">
      <h1>Fun Page</h1>
      <SlimeMoldScene />
      <p>This is a fun page with some interesting content.</p>
      <p>Stay tuned for more fun stuff!</p>
    </div>
  );
};
export default FunPage;
