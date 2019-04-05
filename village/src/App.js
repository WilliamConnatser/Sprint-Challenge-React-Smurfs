import React, {Component} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurfs: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                this.setState({smurfs: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    addSmurfHandler = newSmurf => {
        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(response => {
                this.setState({smurfs: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    editSmurfHandler = (smurfId, smurfInfo) => {
        axios
            .put(`http://localhost:3333/smurfs/${smurfId}`, smurfInfo)
            .then(response => {
                this.setState({smurfs: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    deleteSmurfHandler = event => {
        axios
            .delete(`http://localhost:3333/smurfs/${event.target.id}`)
            .then(response => {
                this.setState({smurfs: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <NavBar/>
                <Route
                    path="/add-smurf"
                    render={_ => <SmurfForm addSmurfHandler={this.addSmurfHandler}/>}/>
                <Route
                    exact
                    path="/"
                    render={_ => <Smurfs
                    smurfs={this.state.smurfs}
                    editSmurfHandler={this.editSmurfHandler}
                    deleteSmurfHandler={this.deleteSmurfHandler}/>}/>
            </div>
        )
    }
}

export default App;