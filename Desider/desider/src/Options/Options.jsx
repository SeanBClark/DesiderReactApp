import React, { Component } from "react";
import Desktop from './OptionsDesktop.jsx';
import Mobile from './OptionsMobile.jsx'
import MediaQuery from 'react-responsive';

class Options extends Component {

    constructor(props) {

        super(props);

        this.state = {};

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

export default Options;