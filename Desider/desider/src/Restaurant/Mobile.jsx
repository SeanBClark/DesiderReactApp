import React, { Component } from "react";
import ReactDOM from 'react-dom';
import RestaurantRender from './RestaurantRender.jsx';
import './Mobile.scss';
import TailSpin from '../Style/LoadingAnimations/TailSpin.jsx';

class Mobile extends Component {

    constructor(props) {

        super(props);

        this.state = {

            GoogleAPI: '',
            loaded: false,
            data: [],
            placeholder: 'loading',
            result: []

        };

        this.getRestaurant = this.getRestaurant.bind(this);

    }

    async componentDidMount() {

        console.log(this.props.location.longitude)

        this.setState({

            GoogleAPI: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' 
                        + await this.props.location.latitude + ',' 
                        + await this.props.location.longitude 
                        +'&radius=1500&type=restaurant&key=<Your Key Here>',

        });

        const proxyurl = 'https://cors-anywhere.herokuapp.com/';

        fetch(proxyurl + this.state.GoogleAPI)
            .then(response => {

                if (response.status > 400) {

                    return this.setState(() => {

                        return { placeholder: 'Something went wrong!' };

                    });

                }
                return response.json();

            })
            .then(data => {

                this.setState(() => {

                    return {

                        data: data.results,
                        loaded: true

                    };

                });

            })
            // .catch(() => console.log('Something went wrong')); //TO DO: Error Page

    }

    getRestaurant() {

        var choiceResult = this.state.data.sort(() => Math.random() - Math.random()).find(() => true);

        return (

            ReactDOM.render (

                //Terrible way to re-render component. Need to fix
                <RestaurantRender height = { '400px' } width = { '' } data = {choiceResult} key = {Math.floor(Math.random() * (100 - 1 + 1)) + 1}/>,document.getElementById('targetDOM')

            )

        );

    }

    render() {

        return (

            <div className = 'restaurant-div'>

                {this.state.loaded ? 
                
                    <div>

                        <div className = 'choice-btn-div'>

                            <button className = 'find-rest-btn' onClick = {this.getRestaurant}>Find Restaurant</button>
                            {/* <button className = 'filter-rest-btn'>Filter Restaurant</button> */}

                        </div>

                        <div className = 'render-div-mb' id = 'targetDOM' name = 'targetDOM'></div>

                    </div>

                : <div><TailSpin /></div>}

            </div>

        );   

    }

}

export default Mobile;