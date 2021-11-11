import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import DisplayMusic from './DisplayMusic/DisplayMusic';

class App extends Component{
    constructor(props){
        super(props)
        this.state = [];
    }

    componentDidMount(){
        this.getAllSongs();
    }

async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data)
    this.setState({
        songs:response.data
    });
}


render() {
    return (
        <div>
            <h1>Song Display</h1>
            <DisplayMusic songs={this.state.songs} />
        </div>
    );
}
}


export default App;