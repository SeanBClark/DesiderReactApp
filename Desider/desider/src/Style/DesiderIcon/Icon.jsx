import React, { Component } from 'react';
import DesiderIcon from './Desider_Icon.svg';

class Icon extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (

            <img alt = 'Icon for Desider' src = { DesiderIcon }></img>

        );   

    }

}

export default Icon;