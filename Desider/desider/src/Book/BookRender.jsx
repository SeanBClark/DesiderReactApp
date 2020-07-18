import React, { Component } from 'react';
import TailSpin from '../Style/LoadingAnimations/TailSpin.jsx'

class BookRender extends Component {

    constructor(props) {

        super(props);

        this.state = {

            data: [],
            loaded: false,
        };

    }

    async componentDidMount() {

        var randomNum = Math.floor(Math.random() * 400);
        var url = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=1&startIndex=' + randomNum + '&langRestrict=en&orderBy=relevance&printType=books&key=<Your Key Here>'

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

                data: data.items,
                loaded: true

            })

        })
        .catch(() => this.setState({ placeholder: 'Something went wrong' })); //TO DO: Error Page

    }

    render() {

        return (

            this.state.loaded ? 
            
            <div className = 'render-div'>

                {this.state.data.map((book, index) => {

                    return(

                        <div key = { book.id }>

                            <div className = 'title'>{ book.volumeInfo.title }</div>

                            <div className = 'author-list-div'>

                                <div className = 'author-title'>Author</div>

                                <ul className = 'author-ul'>

                                    {book.volumeInfo.authors.map((author, index) => {

                                        return(

                                            <li key = { index } className = 'author-li'>

                                                { author }

                                            </li>

                                        );

                                    })}

                                </ul>

                            </div>

                            <div className = 'publisher-div'>

                                <div className = 'publisher-title'>Publisher</div>
                                
                                { book.volumeInfo.publisher }
                                
                            </div>

                            <div className = 'cover-div'>

                                <img alt = { 'Book Cover for ' + book.volumeInfo.title } className = 'cover-img' id = 'coverIMG' src = { book.volumeInfo.imageLinks.thumbnail.replace('zoom=1', 'zoom=0') }></img>

                            </div>

                            <div className = 'desc-div'>

                                <div className = 'title'>Description</div>

                                <div className = 'desc'>{ book.volumeInfo.description }</div>
                                
                            </div>

                            <div className = 'details-div'>

                                    

                                    { book.volumeInfo.averageRating &&  
                                    
                                        <div className = 'rating-div'>

                                            <div className = 'rating-title title'>Average Rating</div>

                                            { book.volumeInfo.averageRating } out of 5

                                        </div>
                                        
                                    }

                                    <div className = 'prev-buy-div'>

                                        <div className = 'prev-buy-title title'>Buy or Sample { book.volumeInfo.title }</div>

                                        <a href = {book.volumeInfo.previewLink}><button className = 'prev-btn btn'>Preview</button></a>

                                        {book.saleInfo.buyLink ? 
                                        
                                            <a href = {book.saleInfo.buyLink}><button className = 'buy-btn btn'>Buy</button></a> 
                                            
                                        : 
                                        
                                            <a href = { 'https://www.google.com/search?q=' + book.volumeInfo.title }><button className = 'buy-btn btn'>Find on Google</button></a>
                                            
                                        }

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