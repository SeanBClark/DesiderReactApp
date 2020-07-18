import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };

    }

    render() {

        var labelText = this.props.label;

        const mapStyles = {
            width: this.props.width,
            height: this.props.height,
          };
          

        return(

            <Map    google = { this.props.google }
                    zoom = {16}
                    style = {mapStyles}
                    initialCenter={{ lat: this.props.latitude, lng: this.props.longitude }}>
                        
                <Marker position = {{ lat: this.props.latitude, lng: this.props.longitude }}
                        label = {labelText}/>

            </Map>

        );

    }

}

export default GoogleApiWrapper({
    apiKey: '<Your Key Here>'
  })(MapContainer);