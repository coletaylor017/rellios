import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

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
            <a className="hover-lighten" onClick={this.handleClick}>
                <Image fluid src={this.props.imageSrc} />
            </a>
        </Col>
    }
}