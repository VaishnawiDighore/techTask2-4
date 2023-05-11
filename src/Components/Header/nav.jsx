import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <div id="title">
        <h2>React</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
}

export default Nav;