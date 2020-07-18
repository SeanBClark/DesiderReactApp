import React, { Component } from "react";
import { HashRouter, Switch, Link, Route } from 'react-router-dom';
import Restaurant from '../Restaurant/Restaurant.jsx';
import Recipe from '../Recipe/Recipe.jsx';
import Book from '../Book/Book.jsx';
import Movie from '../Movie/Movie.jsx';

import './OptionsDesktop.scss';

class Desktop extends Component {

    constructor(props) {

        super(props);

        this.state = {

            desc: 'Can\t make up your mind? Leave it to DESIDER!',
            homeURL: '/#',
            recipeURL: '/Recipe',
            bookURL: '/Book',
            restaurantURL: '/Restaurant',
            movieURL: '/Movie'

        };

    }

    render() {

        return (

            <div className = 'options-div'>

                <div className = 'title' >{this.state.desc}</div>

                <HashRouter>

                    <div className = 'choice-div'>

                        <Link to = {this.state.restaurantURL} className = 'option-link'>

                            <div className = 'option'>                   

                                <span className = ''>Restaurant</span>
                                
                            </div>

                        </Link>
                        <Link to = {this.state.recipeURL} className = 'option-link'>

                            <div className = 'option'>                   

                                <span className = ''>Recipe</span>
                                
                            </div>

                        </Link>
                        {/* <Link to = "/#">

                            <div className = 'option'>                   

                                <span className = ''>Gift</span>
                                
                            </div>

                        </Link> */}
                        <Link to = {this.state.bookURL} className = 'option-link'>

                            <div className = 'option'>                   

                                <span className = ''>Book</span>
                                
                            </div>

                        </Link>
                        <Link to = { this.state.movieURL } className = 'option-link'>

                            <div className = 'option'>                   

                                <span className = ''>Movie</span>
                                
                            </div>

                        </Link>

                    </div>

                    <div className = 'switch-div'>

                        <Switch>

                            <Route path = '/Restaurant' component = { Restaurant }></Route>

                            <Route path = '/Recipe' component = { Recipe }></Route>

                            <Route path = '/Book' component = { Book }></Route>

                            <Route path = '/Movie' component = { Movie }></Route>

                        </Switch>

                    </div>

                </HashRouter>

            </div>

        );   

    }

}

export default Desktop;