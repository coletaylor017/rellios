import React, { Component } from 'react';
import Link from 'next/link'

export default class Header extends Component {
    render() {
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
        return <div>
            <nav className="navbar-light navbar-expand-lg bg-transparent mt-5">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h1 className="text-center font-weight-bold">𝖗𝖊𝖑𝖑𝖎𝖔𝖘</h1>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav">
                        {navLinks.map(navItem => {
                            return <li key={navItem.text} className="nav-item">
                                <Link href={navItem.link}>
                                    <a className="nav-link">{navItem.text}</a>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </nav>
        </div >
    }
}