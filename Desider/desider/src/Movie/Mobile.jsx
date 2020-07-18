import React, { Component } from "react";
import './Mobile.scss';
import MovieRender from './MovieRender.jsx';
import ReactDOM from 'react-dom';

class Mobile extends Component {

    constructor(props) {

        super(props);

        this.state = {};

        this.getMovie = this.getMovie.bind(this);

    }

    getMovie() {

        return  (

            ReactDOM.render( 

                <MovieRender key = {Math.floor(Math.random() * (100 - 1 + 1)) + 1} />,document.getElementById('targetDOM')

            )

        );

    }

    render() {

        return (

            <div className = 'movie-render-mb'>

                <div className = 'btn-div'>

                    <button className = 'get-movie-btn' onClick = {this.getMovie}>Find a Movie to Watch</button>
                    
                </div>
                
                <div className = 'render-dom' id = 'targetDOM' name = 'targetDOM'></div>

            </div>

        );   

    }

}

export default Mobile;