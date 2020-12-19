import React from 'react';
import "./Projects.css";
import formValidation from "../../assersts/formValidation.png";
import gameList from "../../assersts/gameList.png";
import initialCV from "../../assersts/initialCV.png";
import myIMDB from "../../assersts/myIMDB.png";
import nasaPicture from "../../assersts/nasaPicture.png";
import provocareFlex from "../../assersts/provocareFlex.png";
import robofriends from "../../assersts/robofriends.png";
import thePlayer from "../../assersts/thePlayer.png";


function Projects() {
    return (
        <div className="photoContainer">
            <a href="https://github.com/robertpall90/The-player">
                <img className="myProjects" src={thePlayer} alt="thePlayer" />
            </a>
            <a href="https://github.com/robertpall90/robofriends">
                <img className="myProjects" src={robofriends} alt="robofriends" />
            </a>
            <a href="https://github.com/razvantimis/myIMDB-16.2">
                <img className="myProjects" src={myIMDB} alt="myIMDB" />
            </a>
            <a href="https://github.com/robertpall90/AJAX-games3">
                <img className="myProjects" src={gameList} alt="gameList" />
            </a>
            <a href="https://github.com/robertpall90/Contact-form">
                <img className="myProjects" src={formValidation} alt="formValidation" />
            </a>
            <a href="https://github.com/robertpall90?tab=repositories">
                <img className="myProjects" src={initialCV} alt="initialCV" />
            </a>
            <a href="https://github.com/robertpall90/NASA-Picture-of-the-day">
                <img className="myProjects" src={nasaPicture} alt="nasaPicture" />
            </a>
            <a href="https://github.com/robertpall90?tab=repositories">
                <img className="myProjects" src={provocareFlex} alt="provocareFlex" />
            </a>


        </div>
    )
}

export default Projects;

