import React from 'react';
import './Footer.css';
import logo from '../assets/reactlogo.png';


function Footer() {
    return (
        <div className='footer'>
            <div className="divLeft">
                <div className="contactDiv">
                    <a href="tel:+0474872227">
                        <img className="contact" src="https://www.freeiconspng.com/thumbs/phone-icon/phone-icon-clip-art--royalty--7.png"></img>
                    </a>
                    <a href="mailto:pallroberto90@gmail.com">
                        <img className="contact" src="https://assets.stickpng.com/images/584856a7e0bb315b0f7675aa.png"></img>
                    </a>
                    <a href="https://github.com/robertpall90" target="_blank">
                        <img className="contact" src="https://assets.stickpng.com/images/5847f98fcef1014c0b5e48c0.png"></img>
                    </a>
                </div>
            </div>
            <div className="divRight">
                <img className="App-logo" src={logo} alt="Logo" />
                <h2 className='reactLogo'>This project was made using the power of REACT</h2>
            </div>

        </div>
    )
}

export default Footer;