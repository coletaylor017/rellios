import React, { Component } from 'react';
import MarkdownView from 'react-showdown';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

const moment = require('moment');

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
            {this.props.pieceData.created ?
                <p>
                    <i>Created on {moment(this.props.pieceData.created).format("MMMM D, YYYY")}</i>
                </p>
                : null
            }
            <Button href={"mailto:test@example.com?subject=I'm interested in purchasing your piece, " + this.props.pieceData.title} variant="outline-primary">Buy a Print</Button>
            <br />
            <Image style={{ maxWidth: "80%", maxHeight: "40em" }} fluid src={process.env.IMAGE_BASE_URI + this.props.pieceData.image.url} />
            <p className="mt-4">{this.props.pieceData.description}</p>
        </Container>
    }
}
