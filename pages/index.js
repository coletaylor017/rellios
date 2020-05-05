import React, { Component } from 'react';
import Piece from '../components/Piece';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
        if (process.env.NODE_ENV === "production") {
            console.log("production!");
            return {
                pieces: response.data,
                imageBaseUri: ""
            }
        }
        console.log("dev!");
        return {
            pieces: response.data,
            imageBaseUri: "http://localhost:1337"
        }

    }
    render() {
        const pieces = this.props.pieces.map(piece =>
            <Piece
                key={piece._id}
                title={piece.title}
                imageSrc={this.props.imageBaseUri + piece.image.url}
                description={piece.description}
            />
        );

        return <Container className="mt-5">
            <Row className="text-center">
                {pieces}
            </Row>
        </Container>
    }
}