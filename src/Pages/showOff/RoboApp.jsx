import React from 'react';
import CardList from '../../RoboComponents/CardList';
import { robots } from '../../RoboComponents/robots';
import SearchBox from '../../RoboComponents/SearchBox';
import "./RoboApp.css"
import Scroll from "../../RoboComponents/Scroll";
import "tachyons";



class RoboApp extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }


    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default RoboApp;