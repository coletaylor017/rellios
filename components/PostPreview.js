import React, { Component } from 'react';
import MarkdownView from 'react-showdown';
import Link from 'next/link';

export default class PostPreview extends Component {
    render() {
        return <div>
            <Link href={{ pathname: "post", query: { id: this.props.id } }}>
                <a className="text-decoration-none text-reset">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.date}</h4>
                    <MarkdownView
                        markdown={this.props.body}
                    />
                </a>
            </Link>
        </div>
    }
}