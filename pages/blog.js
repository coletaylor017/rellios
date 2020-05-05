import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Post from '../components/Post';
import axios from 'axios';

export default class Blog extends Component {
    static async getInitialProps() {
        let response;
        try {
            response = await axios.get(process.env.CRUD_API_URI + "/posts");
        }
        catch (error) {
            console.log("error fetching /posts");
            console.log(error);
        }
        return {
            posts: response.data
        }
    }
    render() {
        const posts = this.props.posts.map(post =>
            <Post
                key={post._id}
                title={post.title}
                date={post.date}
                body={post.body}
            />
        );
        return <Container>
            {posts}
        </Container>
    }
}