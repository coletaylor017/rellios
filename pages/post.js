import React, { Component } from 'react';
import MarkdownView from 'react-showdown';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Post({ data }) {
    const router = useRouter();

    return <div>

        <h4>{this.props.date}</h4>
        <MarkdownView
            markdown={this.props.body}
        />
    </div>
}

Post.getInitialProps = async ctx => {
    let response;
    try {
        console.log("router query: " + router.query);
        response = await axios.get(process.env.CRUD_API_URI + "/posts/" + router.query);
    }
    catch (error) {
        console.log("error fetching /pieces");
        console.log(error);
    }
    return {
        pieces: response.data
    }
}

export default Post;