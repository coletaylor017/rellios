import React, { Component } from 'react';
import MarkdownView from 'react-showdown';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

export default class Piece extends Component {

    static async getInitialProps(ctx) {
        let response;
        try {
            response = await axios.get(process.env.CRUD_API_URI + "/pieces/" + ctx.query.id);
        }
        catch (error) {
            console.log("error fetching /pieces");
            console.log(error);
        }
        return {
            pieceData: response.data
        }
    }

    render() {
        return <Container className="text-center">
            <h2>{this.props.pieceData.title}</h2>
            {this.props.pieceData.created ? <p><i>Created {this.props.pieceData.created}</i></p> : null}
            <Image style={{ maxWidth: "80%", maxHeight: "40em" }} fluid src={process.env.IMAGE_BASE_URI + this.props.pieceData.image.url} />
            <p className="mt-4">{this.props.pieceData.description}</p>
        </Container>
    }
}
