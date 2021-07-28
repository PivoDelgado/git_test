import React from 'react';
import CardList from '../components/cardlist';
// import {robots} from '../robots';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/scroll';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
           return response.json();
        }).then(users => {
            this.setState({robots: users})
        })
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
                <Scroll>
                    <CardList robots={ filterRobots }/>
                </Scroll>
            </div>
            )
    }
}


export default App;