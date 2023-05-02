// React importation
import React from "react";
import { Link } from "react-router-dom";

// Style importation
import '../style/header.css';

// Components importation
import NavBar from "./NavBar";
import logo from '../logo.jpg';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="logo de l'application" className="logo" />
            </Link>
            <NavBar />
        </div>
    );
}

export default Header;