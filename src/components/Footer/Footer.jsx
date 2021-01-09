import React from 'react';
import './Footer.css';
import logo from '../../assets/reactlogo.png';
import logoGit from "../../assets/logoGitHub.png"


function Footer() {
    return (
        <div className='footer'>
            <div className="divLeft">
                <div className="contactDiv">
                    <a href="tel:+0474872227">
                        <img alt="telephoneIcon" className="contact" src="https://www.freeiconspng.com/thumbs/phone-icon/phone-icon-clip-art--royalty--7.png"></img>
                    </a>
                    <a href="mailto:pallroberto90@gmail.com">
                        <img alt="mailIcon" className="contact" src="https://assets.stickpng.com/images/584856a7e0bb315b0f7675aa.png"></img>
                    </a>
                    <a href="https://github.com/robertpall90" target="_blank" rel="noreferrer">
                        <img alt="gitHubIcon" className="contact" src={logoGit}></img>
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