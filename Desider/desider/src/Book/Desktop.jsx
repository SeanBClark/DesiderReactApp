import React, { Component } from "react";
import './Desktop.scss';
import BookRender from './BookRender.jsx';
import ReactDOM from 'react-dom';

class Desktop extends Component {

    constructor(props) {

        super(props);

        this.state = {};

        this.getBook = this.getBook.bind(this);

    }

    getBook() {

        return  (

            ReactDOM.render( 

                <BookRender key = {Math.floor(Math.random() * (100 - 1 + 1)) + 1} />,document.getElementById('targetDOM')

            )

        );

    }

    render() {

        return (

            <div className = 'book-render'>
                
                <div className = 'btn-div'>

                    <button className = 'get-book-btn' onClick = {this.getBook}>Find a Book to Read!</button>

                </div>

                <div className = 'render-dom' id = 'targetDOM' name = 'targetDOM'></div>

            </div>

        );   

    }

}

export default Desktop;