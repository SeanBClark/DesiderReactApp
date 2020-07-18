import React, { Component } from "react";
import Desktop from './Desktop.jsx';
import Mobile from './Mobile.jsx'
import MediaQuery from 'react-responsive';
import TailSpin from '../Style/LoadingAnimations/TailSpin.jsx';

class Restaurant extends Component {

    constructor(props) {

        super(props);

        this.state = {

            loaded: false,
            placeholder: 'loading',
            location: {

                latitude: 0,
                longitude: 0

            }

        };

        this.success = this.success.bind(this);
        this.error = this.success.bind(this);

    }

    async success(position) {

        this.setState({

            location: {

                latitude: await position.coords.latitude,
                longitude: await position.coords.longitude

            },
            loaded: true

        });

    }

    async componentDidMount() {

        if ('geolocation' in navigator) {

            var options = {

                enableHighAccuracy: true

            }

            navigator.geolocation.getCurrentPosition(this.success, this.error, options);
            

        }
        else {

            console.log('Geo Location Unavailable');

        }

    }

    render() {

        return (

            <div>

                {this.state.loaded ? 
                
                    <div>

                        <MediaQuery minDeviceWidth={1224} values={{deviceWidth: 1230}}>

                            <Desktop location = { this.state.location }/>
                                    
                        </MediaQuery>

                        <MediaQuery maxDeviceWidth={1224}>

                            <Mobile location = { this.state.location } />

                        </MediaQuery>

                    </div>

                : <div><TailSpin /></div>
                
                }

            </div>

        );   

    }

}

export default Restaurant;