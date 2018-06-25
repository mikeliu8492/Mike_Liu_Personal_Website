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
                            <a className="navbar-brand ml-3" title="Home" href="https://cs.illinois.edu/">
                                <img style={{maxHeight: "40px"}} src={illini} alt="Hello World My Name is Mike!"></img>
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

                                <ul class="form-inline my-2 my-lg-0">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a href="mailto:mikeliu8492@gmail.com" className = "nav-link" title="Email"><i className="fa fa-2x fa-envelope" alt="Email"></i></a>
                                        </li>
                                        <li className="nav-item active">
                                            <a href="https://github.com/mikeliu8492" className = "nav-link" title="Github"><i className="fa fa-2x fa-github" alt="Github"></i></a>
                                        </li>
                                        <li className="nav-item active">
                                            <a href="https://www.linkedin.com/in/mikeliu8492/" className = "nav-link" title="LinkedIn"><i className="fa fa-2x fa-linkedin" alt="LinkedIn"></i></a>
                                        </li>
                                        <li className="nav-item active">
                                            <a href="https://www.facebook.com/mike.liu.129" className = "nav-link" title="Facebook"><i className="fa fa-2x fa-facebook" alt="Facebook"></i></a>
                                        </li>
                                    </ul>
                                </ul>

                            </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;