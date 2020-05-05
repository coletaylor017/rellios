import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header() {
    const navLinks = [
        {
            text: "𝖕𝖔𝖗𝖙𝖋𝖔𝖑𝖎𝖔",
            link: "/"
        },
        {
            text: "𝖒𝖎𝖘𝖈",
            link: "/misc"
        },
        {
            text: "𝖑𝖎𝖋𝖊",
            link: "/blog"
        },
        {
            text: "𝖆𝖇𝖔𝖚𝖙",
            link: "/about"
        },
        {
            text: "𝖈𝖔𝖓𝖙𝖆𝖈𝖙",
            link: "/contact"
        }
    ]
    const router = useRouter();
    return <div>
        <h1 className="text-center font-weight-bold mt-5 d-none d-sm-block">𝖗𝖊𝖑𝖑𝖎𝖔𝖘</h1>
        <Navbar expand="sm" className="navbar-light bg-transparent mt-3">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <h1 className="font-weight-bold d-inline-block d-sm-none" style={{
                position: 'absolute',
                left: '50%',
                top: 5,
                transform: 'translateX(-50%)'
            }}>𝖗𝖊𝖑𝖑𝖎𝖔𝖘</h1>
            <Navbar.Collapse id="basic-navbar-nav">
                <hr className="hr-text d-sm-none" />
                <Nav defaultActiveKey="/" activekey={router.pathname} className="mx-auto">
                    {navLinks.map(navItem => {
                        return <Nav.Item key={navItem.text}>
                            <Link href={navItem.link} passHref>
                                <Nav.Link eventKey={navItem.link}><a>{navItem.text}</a></Nav.Link>
                            </Link>
                        </Nav.Item>
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div >
}

export default Header;