import Nav from "./Nav";
import headerlogo from "../assets/headerlogo.png";

function Header() {
    return (
        <header className="header">
        <figure className="header__fig">
        <img className="header__logo" src={headerlogo} alt="logo de l'agence kasa" />
      </figure>
            <Nav />
        </header>
    )
}

export default Header