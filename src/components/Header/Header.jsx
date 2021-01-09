import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='Header'>
            <nav className='nav'>
                <Link to="/">
                    <h2>About me</h2>
                </Link>
                <Link to="/myonlinecv">
                    <h2>My online CV</h2>
                </Link>
                <Link to="/projects">
                    <h2>Projects</h2>
                </Link>
                <Link to="/showoff">
                    <h2>play @ RoboFriends</h2>
                </Link>
            </nav>
        </div>
    )
}

export default Header;