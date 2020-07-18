import React, { Component } from 'react';
import TailSpin from '../Style/LoadingAnimations/TailSpin.jsx';
import MapContainer from '../Map/MapContainer.jsx';

class RestaurantRender extends Component {

    constructor(props) {

        super(props);

        this.state = {

            result: [],
            loaded: false,
            photo: '',
            photoSRC: ''

        };

    }

    async componentDidMount() {

        this.setState({

            result: this.state.result.concat(this.props.data)

        });
        
        var photoDetails = this.props.data.photos;
        var photoRef = photoDetails[0].photo_reference;
        var photoURL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+ photoRef +'&key=<Your Key Here>';

        this.setState({

            photoSRC: photoURL,
            loaded: true

        });

    }

    render() {

        return (
        
            <div>

                {this.state.loaded ? 
                
                    <div className = ''>
                        
                        {this.state.result.map((item) => {

                            return(

                                <div key = {item.id} id = {'resultMap' + item.id} className = 'rest-div'>

                                    <div className = 'title'>{item.name}</div>

                                    <div className = 'address extra-info'>{item.vicinity}</div>

                                    <div className = 'rating extra-info'>Average Rating: {item.rating} out of 5 <br /> Total Reviews: {item.user_ratings_total}</div>

                                    <div className = 'photo-div'>

                                        <img alt = { 'Image of ' + item.name} src = {this.state.photoSRC} className = 'photo'></img>

                                    </div>

                                    <div className = 'details'>

                                        <div className = 'detail-title'>Details about {item.name}</div>

                                        <div className = 'type-map'>

                                            <ul className = 'type-ul'>

                                                {item.types.map(function(type, index) {

                                                    return (

                                                        <li key = { index } className = 'type-li'>{ type.replace(/_/g, ' ') }</li>

                                                    );

                                                })}

                                            </ul>

                                        </div>

                                    </div>

                                    <div className = 'map-title title'>Location</div>

                                    <div className = 'map-div'>

                                        <MapContainer   latitude = { item.geometry.location.lat } 
                                                        longitude = { item.geometry.location.lng } 
                                                        height = { this.props.height }
                                                        width = { this.props.width }
                                                        label = { item.name }/>

                                    </div>

                                </div>

                            );

                        })}
                        
                    </div> 
                    
                : 
                
                    <div><TailSpin /></div>
                    
                }

            </div>
        
        );

    }

}

export default RestaurantRender;