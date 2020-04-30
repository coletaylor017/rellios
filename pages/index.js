import React, { Component } from 'react';
import Piece from '../components/Piece'
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
            pieces: response.data,
            crud_api_uri: process.env.CRUD_API_URI
        }
    }
    render() {
        console.log(this.props.pieces[0].image);
        const pieces = this.props.pieces.map(piece =>
            <Piece
                key={piece._id}
                title={piece.title}
                imageSrc={this.props.crud_api_uri + piece.image.formats.thumbnail.url}
                description={piece.description}
            />
        );

        return <div>
            <h1>𝖗𝖊𝖑𝖑𝖎𝖔𝖘</h1>
            {pieces}
        </div>
    }
}