import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return <div>
            <h3>{this.props.title}</h3>
            <h4>{this.props.date}</h4>
            <p>{this.props.body}</p>
        </div>
    }
}