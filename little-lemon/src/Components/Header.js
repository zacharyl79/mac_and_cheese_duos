import "../App.css";
import Logo from "../assets/logo.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" style={{"textDecoration": "none"}}>
        <img src={Logo} alt="little lemon logo" />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
