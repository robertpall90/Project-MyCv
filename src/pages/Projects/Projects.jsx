import React from 'react';
import "./Projects.css";
import formValidation from "../../assets/formValidation.png";
import gameList from "../../assets/gameList.png";
import initialCV from "../../assets/initialCV.png";
import myIMDB from "../../assets/myIMDB.png";
import nasaPicture from "../../assets/nasaPicture.png";
import provocareFlex from "../../assets/provocareFlex.png";
import robofriends from "../../assets/robofriends.png";
import thePlayer from "../../assets/thePlayer.png";


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

