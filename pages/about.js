import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import MarkdownView from 'react-showdown';
import axios from 'axios';

export default class About extends Component {
    static async getInitialProps() {
        let response;
        try {
            response = await axios.get(process.env.CRUD_API_URI + "/about-page-content");
        }
        catch (error) {
            console.log("error fetching /pieces");
            console.log(error);
        }
        return {
            content: response.data.content
        }
    }
    render() {
        return <Container className="text-center mb-5" style={{ whiteSpace: "pre-line" }}>
            <MarkdownView
                markdown={this.props.content}
            />

        </Container>
    }
}