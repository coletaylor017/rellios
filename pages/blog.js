import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import PostPreview from '../components/PostPreview';
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
            <PostPreview
                key={post._id}
                id={post._id}
                title={post.title}
                date={post.date}
                body={post.body}
            />
        );
        return <Container className="mb-5">
            {posts}
        </Container>
    }
}