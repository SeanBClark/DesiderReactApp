import React, { Component } from "react";
import Desktop from './Desktop.jsx';
import Mobile from './Mobile.jsx'
import MediaQuery from 'react-responsive';

class Recipe extends Component {

    constructor(props) {

        super(props);

        this.state = {        };

    }

    render() {

        return (

            <div>

                <MediaQuery minDeviceWidth={1224} values={{deviceWidth: 1230}}>

                    <Desktop />
                                
                </MediaQuery>

                <MediaQuery maxDeviceWidth={1224}>

                    <Mobile />

                </MediaQuery>

            </div>

        );   

    }

}

export default Recipe;