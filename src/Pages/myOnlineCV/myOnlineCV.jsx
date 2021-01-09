import React from 'react';
import "./MyOnlineCV.css";
import logo1 from "../../assets/facultate.jpg"
import logo2 from "../../assets/liceu.png";
import logo3 from "../../assets/creanga.jpg"
import logo4 from "../../assets/after.png";
import logo5 from "../../assets/pepsi.jpeg"
import logo6 from "../../assets/scoalaIT.jpeg"
import logo7 from "../../assets/cluj.jpeg";



function MyOnlineCV() {
    return (
        <div>
            <h1 className="tc">Pall Robert-Ianos</h1>
            <div className="myPresentation">
                <div className="generalInfo">
                    <h3 className="titles">General info</h3>
                    <ul>
                        <li>
                            <img className="photos" src={logo6} alt="Scoala informala" />
                            Web Development gr. 16</li>
                        <li>
                            <img className="photos" src={logo7} alt="Cluj" />
                            Cluj-Napoca</li>
                    </ul>
                </div>
                <div className="education">
                    <h3 className="titles">Educatie</h3>
                    <ul>
                        <li>
                            <img className="photos" src={logo1} alt="Facultate" />
                        Universitatea Babes-Bolyai, Facultatea de business</li>
                        <p className="paragraf"> Administrarea afacerilor</p>
                        <li>
                            <img className="photos" src={logo2} alt="Liceu" />
                    Liceul Teoretic Apáczai Csere János</li>
                        <p className="paragraf"> Matematica-informatica</p>
                        <li>
                            <img className="photos" src={logo3} alt="Generala" />
                Scoala gimnaziala Ion Creanga</li>
                        <p className="paragraf"> Clasele 1-8</p>
                    </ul>
                </div>
                <div className="work">
                    <h3 className="titles">Experienta profesionala</h3>
                    <ul>
                        <li>
                            <img className="photos" src={logo5} alt="Pepsi" />
                        Pepsico  </li>
                        <p className="paragraf"> Business Development Representative
                        <br></br>2020 - Present</p>
                        <li>
                            <img className="photos" src={logo4} alt="After" />
                    After Eight-Cocktail Club</li>
                        <p className="paragraf"> Manager Bar
                        <br></br> 2015 - 2020</p>
                    </ul>
                </div>
            </div>
            <div className="iframeContainer">
                <div className='iframeuri'>
                    <p class="titles">Learn @ Scoala Informala de IT:</p>
                    <iframe title="webpage scoala informala" width="500" height="300" src="https://scoalainformala.ro/" frameborder="yes"
                        scrolling="yes"></iframe>
                </div>
                <div className='iframeuri'>
                    <p class="titles">Party @ After Eight Cocktail Club</p>
                    <iframe title="webpage club after8" name="iframeafter8" width="500" height="300" src="https://aftereight.ro/" frameborder="yes"
                        scrolling="yes"></iframe>
                </div>
            </div>
        </div>
    )
}


export default MyOnlineCV;
