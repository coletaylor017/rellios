import React, { Component } from 'react';
import axios from 'axios';

export default class Index extends Component {
    static async getInitialProps() {
        let artPieces;
        try {
            artPieces = await axios.get(process.env.CRUD_API_URI + "/pieces");
        }
        catch (error) {
            console.log("error fetching /pieces");
        }
        return {
            pieces: artPieces.data
        }
    }
    render() {
        return <div>
            <h1>𝖗𝖊𝖑𝖑𝖎𝖔𝖘</h1>
            {this.props.pieces.map(piece => piece.title)}
        </div>
    }
}