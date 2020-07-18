import React, { Component } from "react";
import Icon from '../Style/DesiderIcon/Icon.jsx';
import './Mobile.scss';

class Mobile extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (

            <div>

                <a href = '/#'>

                    <div className = 'desider-icon-div'>

                        <Icon />

                    </div>

                </a>

                <div className = 'nav-options-div'>

                    <div className = 'home-btn-div nav-btn'>

                        Home

                    </div>

                    <div className = 'login-btn-div-mb nav-btn'>

                        Log into Account

                    </div>

                    <div className = 'contact-btn-div nav-btn'>

                        Contact

                    </div>

                </div>

            </div>

            // <div className = 'nav-bar-div'>

            //     <div className = 'desider-icon-div'>

            //         <Icon />
                    
            //     </div>

                // <div className = 'nav-options-div'>

                //     <div className = 'home-btn-div nav-btn'>

                //         Home

                //     </div>

                //     <div className = 'contact-btn-div nav-btn'>

                //         Contact

                //     </div>

                //     <div className = 'login-btn-div nav-btn'>

                //         Log into Account

                //     </div>

                // </div>

            // </div>

        );   

    }

}

export default Mobile;