import React, { Component } from "react";
import './Mobile.scss';
import RecipeRender from './RecipeRender.jsx';
import ReactDOM from 'react-dom';

class Mobile extends Component {

    constructor(props) {

        super(props);

        this.state = {};

        this.getRecipe = this.getRecipe.bind(this);

    }

    getRecipe() {

        return  (

            ReactDOM.render( 

                <RecipeRender key = {Math.floor(Math.random() * (100 - 1 + 1)) + 1} />,document.getElementById('targetDOM')

            )

        );

    }

    render() {

        return (

            <div className = 'recipe-render-mobile'>
                
                <div className = 'btn-div'>

                    <button className = 'get-recipe-btn' onClick = {this.getRecipe}>Get Recipe!</button>

                </div>

                <div className = 'render-dom' id = 'targetDOM' name = 'targetDOM'></div>

            </div>

        );   

    }

}

export default Mobile;