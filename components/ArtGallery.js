import React, { Component } from 'react';
import { Modal, Row, Col, Button, Image } from 'react-bootstrap';
import PiecePreview from './PiecePreview';
import Link from "next/link";

export default class ArtGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            piece: null
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    /**
     * Indicates that the modal should be hidden
     */
    handleClose() {
        this.setState({
            showModal: false,
            piece: null
        });
    }

    /**
     * Indicates that the modal should be shown, featuring a piece with the given ID
     * @param {*} pieceData 
     */
    handleShow(pieceId) {
        // find the correct piece to display in the modal
        const selectedPiece = this.props.pieces.find(function (piece) {
            return piece._id == pieceId;
        });
        this.setState({
            showModal: true,
            piece: selectedPiece
        });
    }

    render() {

        const pieces = this.props.pieces.map(piece =>
            <PiecePreview
                key={piece._id}
                id={piece._id}
                imageSrc={process.env.IMAGE_BASE_URI + piece.image.url}
                handleShow={this.handleShow}
            />
        );

        return <div>
            <Row className="text-center">
                {pieces}
            </Row>

            {this.state.piece ?
                <Modal size="lg" show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.piece.title}</Modal.Title>
                    </Modal.Header>

                    <Row className="m-4">
                        <Col md={6}>
                            <Modal.Body>{this.state.piece.description}</Modal.Body>
                            <Modal.Footer>
                                <Link href={{ pathname: "piece", query: { id: this.state.piece.id } }}>
                                    <Button variant="outline-secondary">More</Button>
                                </Link>
                                <Button href={"mailto:test@example.com?subject=I'm interested in purchasing your piece, " + this.state.piece.title} variant="outline-primary">Buy a Print</Button>
                            </Modal.Footer>
                        </Col>
                        <Col className="text-center" md={6}>
                            <Image className="mx-auto" fluid src={process.env.IMAGE_BASE_URI + this.state.piece.image.url} />
                        </Col>
                    </Row>
                </Modal>
                : null}
        </div>
    }
}