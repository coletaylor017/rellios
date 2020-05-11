import React, { Component } from 'react';
import MarkdownView from 'react-showdown';
import Link from 'next/link';

const moment = require('moment');

export default class PostPreview extends Component {
    render() {
        return <div className="py-5 border-top">
            <Link href={{ pathname: "post", query: { id: this.props.id } }}>
                <a className="text-decoration-none text-reset">
                    <h3>{this.props.title}</h3>
                    <p><i>{moment(this.props.date).format("MMMM D, YYYY")}</i></p>
                    <MarkdownView className="hide-images"
                        markdown={this.props.body.substring(0, 500) + "... (read more)"}
                    />
                </a>
            </Link>
        </div>
    }
}