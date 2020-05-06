import React, { Component } from 'react';
import MarkdownView from 'react-showdown';

export default class PostPreview extends Component {
    render() {
        return <div>
            <h3>{this.props.title}</h3>
            <h4>{this.props.date}</h4>
            <MarkdownView
                markdown={this.props.body}
                options={{ tables: true, emoji: true }}
            />
        </div>
    }
}