import React from 'react';
import "./myOnlineCV.css";
import logo1 from "./facultate.jpg";
import logo2 from "./liceu.png";
import logo3 from "./creanga.jpg"
import logo4 from "./after.png";
import logo5 from "./pepsi.jpeg"



function MyOnlineCV() {
    return (
        <div>
            <h1 className="tc">Pall Robert-Ianos</h1>

            <div className="myPresentation">

                <div className="generalInfo">
                    <h3 className="titles">General info</h3>

                    <p> Web Development gr. 16<br></br>
                30 ani<br></br>
                Cluj-Napoca<br></br>
                        <a href="tel:+0474872227">+40747872227</a><br></br>
                        <a href="mailto:pallroberto90@gmail.com">Mail me! </a><br></br>
                        <a href="https://github.com/robertpall90" target="_blank">https://github.com/robertpall90</a>
                    </p>
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
                        Pepsico</li>
                        <p className="paragraf"> Business Development Representative</p>
                        <li>
                            <img className="photos" src={logo4} alt="After" />
                    After Eight-Cocktail Club</li>
                        <p className="paragraf"> Manager Bar</p>
                    </ul>
                </div>
            </div>
            <div className="iframeContainer">
                <div className='iframeuri'>
                    <p class="titles">Learn @ Scoala Informala de IT:</p>
                    <iframe width="500" height="300" src="https://scoalainformala.ro/" frameborder="yes"
                        scrolling="yes"></iframe>
                </div>

                <div className='iframeuri'>
                    <p class="titles">Party @ After Eight Cocktail Club</p>
                    <iframe name="iframeafter8" width="500" height="300" src="https://aftereight.ro/" frameborder="yes"
                        scrolling="yes"></iframe>
                </div>
            </div>
        </div>
    )
}


export default MyOnlineCV;
