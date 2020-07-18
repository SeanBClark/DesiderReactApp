import React, { Component } from "react";
import NavBar from '../NavBar/NavBar.jsx';
import Options from '../Options/Options.jsx';
import Footer from '../Footer/Footer.jsx';

class Desktop extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (            

            <div>

                <div className = 'full-page-div'>

                    <NavBar />

                <div className = 'body-div'>

                    <Options />
                    
                </div>

                </div>

                <div className = 'footer-div'>

                    <Footer />

                </div>

            </div>

        );   

    }

}

export default Desktop;