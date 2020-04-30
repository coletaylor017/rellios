import React, { Component } from 'react'

export default class Piece extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h3>{this.props.title}</h3>
            <img src={this.props.imageSrc} />
            <p>{this.props.description}</p>
        </div>
    }
}