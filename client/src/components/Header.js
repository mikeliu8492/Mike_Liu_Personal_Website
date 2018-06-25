import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'tachyons';

import './Header.css'

import illini from '../images/common/ILLINI.jpg'
const google_url = "https://drive.google.com/uc?id=1NIE_xCq0cIvcy4LHMEyO-SoprG-kZQkv"

class Header extends Component {
    render() {
        return(
            <div>
                <header className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "black"}}>
                    <nav className="container">
                            <a className="navbar-brand" title="Home" href="https://cs.illinois.edu/">
                                <img src={illini} className="dib w2 h2" alt="Hello World My Name is Mike!"></img>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link to="/" className = "nav-link" title="Home">Home</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href={google_url} title="Resume">Resume</a>   
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/work" className = "nav-link" title="Work Experience">Work Experience</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/portfolio" className = "nav-link" title="Portfolio">Portfolio</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/ask_me_anything" className = "nav-link" title="Ask Me Anything">Ask Me Anything</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/musical" className = "nav-link" title="Musical Surpise">Musical Surprise</Link>
                                    </li>
                                </ul>
                            </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;




/*
<div className = "w-100">
                    <h1 id = "main-headline"> Hello World!  My Name is Mike Liu</h1>
                </div>

                <nav className="dt dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10 nav-text">
                    <div className="dtc dn-ns w-third"></div>

                    <a className="dtc v-mid mid-gray link dim w-third w-25-ns tc tl-ns mb2 mb0-ns" title="Home" href="https://cs.illinois.edu/">
                    <img src={illini} className="dib w2 h2" alt="Hello World My Name is Mike!">
                    </img>
                    </a>

                    <div id="menu" className="static-ns absolute mt5 mt0-ns left-100 db dtc-ns v-mid w-50 w-100-ns w-75-ns h-80 tr">
                    
                    <Link to="/" className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" title="Home">Home</Link>
                    <a className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" href={google_url} title="Resume">Resume</a>          
                    <Link to="/work" className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" title="Work Experience">Work Experience</Link>
                    <Link to="/portfolio" className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" title="Projects">Portfolio</Link>
                    <Link to="/ask_me_anything" className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" title="Ask Me Anything">Ask Me Anything!</Link>              
                    <Link to="/musical" className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" title="Musical Surprise">Musical Surprise</Link>
                    </div>

                    <a id="menu-btn" className="dtc tr v-mid dn-ns w-third pr2 p0-ns link dim dark-gray">
                    Menu
                    </a>
                </nav>

*/