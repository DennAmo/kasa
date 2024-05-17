import Nav from "./Nav";
import logo from "../assets/logo.png";

function Header() {
    return (
        <header className="header">
        <figure className="header__fig">
        <img className="header__logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
            <Nav />
        </header>
    )
}

export default Header