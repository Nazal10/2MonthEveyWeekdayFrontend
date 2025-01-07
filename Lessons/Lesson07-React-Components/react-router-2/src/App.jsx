import Router from "./routes/Router";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/parameter/1">Parameter</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/news/sport">Sport</NavLink>
        </li>
        <li>
          <NavLink to="/news/economy">Economy</NavLink>
        </li>
      </ul>
      <Router />
    </>
  );
}

export default App;
