import React, { Component } from "react";
import Desktop from './Desktop.jsx';
import Mobile from './Mobile.jsx'
import MediaQuery from 'react-responsive';

class Footer extends Component {

    constructor(props) {

        super(props);

        this.state = {

            TheMovieDB: 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg'

        };

    }

    render() {

        return (

            <div>

                <MediaQuery minDeviceWidth={1224} values={{deviceWidth: 1230}}>

                    <Desktop TheMovieDB = { this.state.TheMovieDB }/>
                                
                </MediaQuery>

                <MediaQuery maxDeviceWidth={1224}>

                    <Mobile  TheMovieDB = { this.state.TheMovieDB } />

                </MediaQuery>

            </div>

        );   

    }

}

export default Footer;