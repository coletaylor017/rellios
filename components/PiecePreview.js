import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

export default class PiecePreview extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleShow(this.props.id);
    }

    render() {
        return <Col md={4} className="mb-4">
            <a onClick={this.handleClick}>
                <img className="img-fluid" src={this.props.imageSrc} />
            </a>
        </Col>
    }
}