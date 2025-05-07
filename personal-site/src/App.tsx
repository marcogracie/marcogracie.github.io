import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Website from "./components/website";

const container = document.getElementById("root");

const App = () => {
  return (
    <BrowserRouter>
      <Website />
    </BrowserRouter>
  );
};

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
