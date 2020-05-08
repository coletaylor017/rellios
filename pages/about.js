import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default class About extends Component {
    render() {
        return <Container className="text-center mb-5" style={{ whiteSpace: "pre-line" }}>
            <Image className="mb-5" src="https://rellios-direct-uploads.s3.us-west-2.amazonaws.com/mw-profile.jpg" />
            <p>I am Rellios. <br />
            I am young and  naïve.</p>

            <p>My name is My Wagner. <br />
            I am an artist and a writer.</p>

            <p>I am graduating from Olympus High School in May 2020. <br />
            I will be attending the University of Utah.</p>

            <p>I hope to live in the moment and reminisce on the best parts of life.</p>

            <p>This is my portfolio</p>
        </Container>
    }
}