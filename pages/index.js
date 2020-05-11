import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ArtGallery from '../components/ArtGallery';
import axios from 'axios';

export default class Index extends Component {
    static async getInitialProps() {
        let response;
        try {
            response = await axios.get(process.env.CRUD_API_URI + "/pieces" + "?put_in_portfolio=true");
        }
        catch (error) {
            console.log("error fetching /pieces");
            console.log(error);
        }
        return {
            pieces: response.data
        }
    }


    render() {
        return <Container>
            <ArtGallery pieces={this.props.pieces} />
        </Container>
    }
}