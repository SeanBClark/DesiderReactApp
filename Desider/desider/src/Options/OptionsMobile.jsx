import React, { Component } from "react";
import { HashRouter, Switch, Link, Route } from 'react-router-dom';

//Components
import Restaurant from '../Restaurant/Restaurant.jsx'
import Movie from '../Movie/Movie.jsx';
import Book from '../Book/Book.jsx';
import Recipe from "../Recipe/Recipe.jsx";

//Style Sheets
import './OptionsMobile.scss';

class Mobile extends Component {

    constructor(props) {

        super(props);

        this.state = {

            desc: 'Can\'t make up your mind? Leave it to DESIDER!',
            homeURL: '/#',
            recipeURL: '/Recipe',
            bookURL: '/Book',
            restaurantURL: '/Restaurant',
            movieURL: '/Movie',
            optionsVisible: true

        };

        this.hideOptions = this.hideOptions.bind(this);
        this.showOptions = this.showOptions.bind(this);

    }

    hideOptions() {

        this.setState({

            optionsVisible: false

        })

    }

    showOptions() {

        this.setState({

            optionsVisible: true

        })

    }

    render() {

        return (

            <div className = 'options-div-mb'>

                { this.state.optionsVisible ? <div className = 'title' >Can't make up your mind? <br />Leave it to DESIDER!</div> : <div></div>}

                    <HashRouter>

                        { this.state.optionsVisible ? <div className = 'choice-div'>

                            <Link to = { this.state.restaurantURL }>

                                <div className = 'option' onClick = { this.hideOptions }>                   

                                    <span className = ''>Restaurant</span>
                                    
                                </div>

                            </Link>
                            <Link to = { this.state.recipeURL }>

                                <div className = 'option' onClick = { this.hideOptions }>                   

                                    <span className = ''>Recipe</span>
                                    
                                </div>

                            </Link>
                            {/* <Link to = "/#">

                                <div className = 'option'>                   

                                    <span className = ''>Gift</span>
                                    
                                </div>

                            </Link> */}
                            <Link to = { this.state.bookURL }>

                                <div className = 'option' onClick = { this.hideOptions }>                   

                                    <span className = ''>Book</span>
                                    
                                </div>

                            </Link>
                            <Link to = { this.state.movieURL }>

                                <div className = 'option' onClick = { this.hideOptions }>                   

                                    <span className = ''>Movie</span>
                                    
                                </div>

                            </Link>

                        </div> : 
                        <div>

                            <div className = 'other-options' onClick = { this.showOptions }>Select Another Options</div>

                        </div> }

                        {!this.state.optionsVisible && 
                        
                            <div className = 'switch-div'>

                                <Switch>

                                    <Route path = { this.state.restaurantURL } component = { Restaurant }></Route>

                                    <Route path = { this.state.movieURL } component = { Movie }></Route>

                                    <Route path = { this.state.bookURL } component = { Book }></Route>

                                    <Route path = { this.state.recipeURL } component = { Recipe }></Route>
                                    
                                </Switch> 

                            </div>
                        
                        }

                    </HashRouter>

            </div>

        );   

    }

}

export default Mobile;