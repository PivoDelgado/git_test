import React, {useState, useEffect} from 'react';
import CardList from '../components/cardlist';
// import {robots} from '../robots';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/scroll';

function App () {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
           return response.json();
        }).then(users => {
            setRobots(users)});
        },[])
    
    
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    } 

    const filterRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
    return(
        <div className='general'>
            <h1>ROBOFRIENDS</h1>
            <Searchbox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={ filterRobots }/>
            </Scroll>
        </div>
            )
        }


export default App;