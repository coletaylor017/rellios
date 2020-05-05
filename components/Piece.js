import React, { Component } from 'react'

export default class Piece extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="col-md-4 mb-4">
            <img className="img-fluid" src={this.props.imageSrc} />
        </div>
    }
}