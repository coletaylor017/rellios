import React, { Component } from 'react';
import MarkdownView from 'react-showdown';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

const moment = require('moment');

export default class Post extends Component {

    static async getInitialProps(ctx) {
        let response;
        try {
            response = await axios.get(process.env.CRUD_API_URI + "/posts/" + ctx.query.id);
        }
        catch (error) {
            console.log("error fetching /pieces");
            console.log(error);
        }
        return {
            title: response.data.title,
            date: response.data.createdAt,
            body: response.data.body,
            piece: response.data.piece
        }
    }

    render() {
        return <Container>
            <Row>
                <Col md={9} >
                    <h2>{this.props.title}</h2>
                    <p><i>{moment(this.props.date).format("MMMM D, YYYY")}</i></p>
                    <MarkdownView classname="blog-post"
                        markdown={this.props.body}
                    />
                </Col>
                {this.props.piece ?
                    <Col className="text-center" md={3} >
                        <div className="py-5 px-2" style={{ backgroundColor: "rgb(0,0,0,0.03)" }}>
                            <h5><i><u>Featured in this post:</u></i></h5>
                            <Link href={{ pathname: "piece", query: { id: this.props.piece._id } }}>
                                <a className="hover-lighten">
                                    <Image fluid className="mx-auto mt-4 mb-3 w-75" src={this.props.piece.image.url} />
                                </a>
                            </Link>
                            <br />
                            <Link href={{ pathname: "piece", query: { id: this.props.piece._id } }}>
                                <a>{this.props.piece.title}</a>
                            </Link>
                        </div>
                    </Col>
                    : null
                }
            </Row>
        </Container>
    }
}
