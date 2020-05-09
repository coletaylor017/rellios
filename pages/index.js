import React, { Component } from 'react';
import Piece from '../components/Piece';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import axios from 'axios';

export default class Index extends Component {
    static async getInitialProps() {
        let response;
        try {
            response = await axios.get(process.env.CRUD_API_URI + "/pieces");
        }
        catch (error) {
            console.log("error fetching /pieces");
            console.log(error);
        }
        return {
            pieces: response.data
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            show: false,
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
            show: false,
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
            show: true,
            piece: selectedPiece
        });
    }

    render() {
        const pieces = this.props.pieces.map(piece =>
            <Piece
                key={piece._id}
                id={piece._id}
                imageSrc={process.env.IMAGE_BASE_URI + piece.image.url}
                handleShow={this.handleShow}
            />
        );

        return <Container>
            <Row className="text-center">
                {pieces}
            </Row>

            {this.state.piece ?
                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.piece.title}</Modal.Title>
                    </Modal.Header>

                    <Row className="m-4">
                        <Col md={6}>
                            <Modal.Body>{this.state.piece.description}</Modal.Body>
                            <Modal.Footer>
                                <Link href="/contact">
                                    <Button variant="outline-primary">Buy a Print</Button>
                                </Link>
                            </Modal.Footer>
                        </Col>
                        <Col className="text-center" md={6}>
                            <Image className="mx-auto" fluid src={process.env.IMAGE_BASE_URI + this.state.piece.image.url} />
                        </Col>
                    </Row>
                </Modal>
                : null}
        </Container>
    }
}