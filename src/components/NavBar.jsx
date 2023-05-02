// React importation
import React from "react";
import { Link } from "react-router-dom";

// Style importation
import '../style/navbar.css';


function NavBar() {
    return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__item">
                    <Link to="/" className="nav__link">Accueil</Link>
                </li>
                <li className="nav__item">
                    <Link to="/recipes" className="nav__link">Recettes</Link>
                </li>
                <li className="nav__item">
                    <Link to="/contact" className="nav__link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;