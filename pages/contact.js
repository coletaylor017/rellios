import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Contact extends Component {
    render() {
        return <Container className="text-center">
            <p>If you are interested in purchasing a print or one of my pieces, please <a href="mailto:rellios@outlook.com">email me.</a></p>

            <p>If you have any other questions or concerns, please reach out and I will get back you in a timely manner.</p>
        </Container>
    }
}