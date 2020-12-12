import React from 'react';
import './Footer.css';
import logo from '../reactlogo.png';


function Footer() {
    return (
        <div className='footer'>
            <img className="App-logo" src={logo} alt="Logo" />
            <h2 className='reactLogo'>This project was made using the power of REACT</h2>

        </div>
    )
}

export default Footer;