import React from 'react';
import CardList from './cardlist';
import {robots} from './robots';
import Searchbox from './Searchbox';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    } 
    
    render(){
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='general'>
                <h1>ROBOFRIENDS</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList robots={ filterRobots }/>
            </div>
            )
    }
}


export default App;