import React, { Component } from "react";
import './Desktop.scss';

class Desktop extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (

            <div className = 'footer-render'>

                <div className = 'title'>Powered By</div>

                <a href = 'https://www.themoviedb.org/'>
                    
                    <div className = 'the-movie-db'>

                        <img alt = 'Icon for The Movie Database' className = 'the-movie-db-img' src = { this.props.TheMovieDB }></img>

                    </div>

                </a>

                {/* <a href = 'https://spoonacular.com/'>
                    
                    <div className = 'Spoontacular'>

                        <img className = 'the-movie-db-img' src = 'https://spoonacular.com/application/frontend/images/spoonacular-logo.svg'></img>

                    </div>

                </a> */}

            </div>

        );   

    }

}

export default Desktop;