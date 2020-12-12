import React from 'react';
import './aboutMe.css'
import logo from "./photoofme.jpg";

function AboutMe() {
    return (
        <div>

            <h1 className="tc">Pall Robert-Ianos</h1>
            <div className="aboutMe">
                <div className="aboutMeTwo">

                    <p>I am a pragmatic and persevering person, oriented towards efficiency,
                    with inclination towards order and discipline. In more than 10 years of activity in the HoReCa field,
                    I have acquired good communication and public relations, organizational and conflict resolution skills.
                    I look forward  to new challenges, to expand and diversify my knowledge and experience in management and sales,
                     and learn new things.</p>
                    <p>One of the new things I look forward to learn better is web development, hope to become the no.1 REACT pokemon master :D</p>
                    <p>The story says that I signed up to Scoala Informala de IT's "Intro in IT" course in february 2020, after deciding that I need a change in my life.
                    After finishing the course I decided to take the journey towards web development, so next I signed up for the
                    "Front-end Web Development" course, where under the tutoring of Crina Berinde, Henrietta Szekely and the one and only JavaScript ninja,
                    Razvan Timis, my heart begin to have a crush on React. Hope to have a beautiful love story with this gorgeous JavaScript library and
                    to live happily ever after.</p>
                </div>
                <img className="photoofme" src={logo} alt="Myself" />
            </div>
        </div>
    )
}

export default AboutMe;