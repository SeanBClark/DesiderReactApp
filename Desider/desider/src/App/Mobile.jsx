import React, { Component } from "react";
import NavBar from '../NavBar/NavBar.jsx';
import Options from '../Options/Options.jsx';
import './MobileApp.scss';

class Mobile extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (

            <div className = 'full-page-div'>

                <NavBar />

                <div className = 'body-div body-div-mb'>

                    <Options />
                    
                </div>

            </div>

        );   

    }

}

export default Mobile;