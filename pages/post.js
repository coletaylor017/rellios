import React, { Component } from 'react';
import MarkdownView from 'react-showdown';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

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
            postData: response.data
        }
    }

    render() {
        return <Container>
            <h4>{this.props.postData.date}</h4>
            <MarkdownView
                markdown={this.props.postData.body}
            />
        </Container>
    }
}
