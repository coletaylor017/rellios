import React, { Component } from 'react';
import Piece from '../components/Piece';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export default class Index extends Component {
    static async getInitialProps() {
        let response;
        try {
            // environment variables should be available on server side. Should be problematic when this page is navigated to using a link
            response = await axios.get(process.env.CRUD_API_URI + "/pieces");
        }
        catch (error) {
            console.log("error fetching /pieces");
        }
        return {
            pieces: response.data
        }
    }
    render() {
        const pieces = this.props.pieces.map(piece =>
            <Piece
                key={piece._id}
                title={piece.title}
                imageSrc={piece.image.url}
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