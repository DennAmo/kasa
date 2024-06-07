import React from "react";
import footerlogo from "../../assets/footerlogo.png";


function Footer() {
    return (
        <footer className="footer">
            <img className="footer__img" src={footerlogo} alt="Kasa"></img>
            <span className="footer__right">© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer