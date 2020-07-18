import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React, { Component } from "react";
import './LoadingAnimation.scss';

class TailSpin extends Component {

    render() {

        return (

            <div className = 'loading-animation'>
                
                <Loader type="TailSpin" color="#0066c9" height={150} width={150} />

            </div>

        )

    }
    
}

export default TailSpin;