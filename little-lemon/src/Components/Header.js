import "../App.css";
import Logo from "../assets/logo.png";
import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="little lemon logo"/>
            <Nav />
        </header>
    );
}

export default Header;