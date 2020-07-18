import React, { Component } from 'react';
import TailSpin from '../Style/LoadingAnimations/TailSpin.jsx'

class BookRender extends Component {

    constructor(props) {

        super(props);

        this.state = {

            data: [],
            loaded: false,
            movie: []

        };

    }

    async componentDidMount() {

        var randomNum = Math.floor(Math.random() * 20);
        var url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=<Your Key Here>&page=' + randomNum;

        await fetch(url)
        .then(response => {

            if (response.status > 400) {
                
                this.setState({

                    placeholder: 'Something went wrong'

                })

            }
            return response.json();

        })
        .then(data => {

            this.setState({

                data: data.results

            })

        })
        .catch(() => this.setState({ placeholder: 'Something went wrong' })); //TO DO: Error Page

        let rand = Math.floor(Math.random() * this.state.data.length);

        this.setState({

            movie: this.state.movie.concat(this.state.data[rand]),
            loaded: true

        });

    }

    render() {

        return (

            this.state.loaded ? 
            
            <div className = 'render-div'>

                {this.state.movie.map((movie, index) => {

                    return(

                        <div key = { movie.id }>

                            <div className = 'title'>{ movie.title }</div>

                            <div className = 'poster-div'>

                                <img alt = { 'Poster for ' + movie.title } className = 'poster-img' src = {'https://image.tmdb.org/t/p/w500' + movie.poster_path}></img>

                            </div>

                            <div className = 'desc-div'>

                                <div className = 'title'>Description</div>
                                
                                <div className = 'desc'>{ movie.overview }</div>
                                
                            </div>

                            {/* <div className = 'rating'>{ movie.vote_average + ' out of 10.'}</div> */}

                            <div className = 'details-div'>

                                <div className = 'rating-div'>

                                    <div className = 'rating-title'>

                                        Rating

                                    </div>

                                    <div className = 'rating-details'>

                                        { movie.vote_average + ' out of 10'}

                                    </div>

                                    <div className = 'rating-details'>

                                        { movie.vote_count + ' votes cast' }

                                    </div>

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div> : <div><TailSpin></TailSpin></div>

        );   

    }

}

export default BookRender;