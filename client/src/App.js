import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import 'tachyons';


import './App.css';

import illini from './images/common/ILLINI.jpg'
import Footer from './components/Footer'

import Home from './views/Home'
import Musical from './views/Musical'
import Portfolio from './views/Portfolio'
import AskMeAnything from './views/AskMeAnything'
import WorkExperience from './views/WorkExperience';
import Food from './views/Food';
import Microsoft from './views/Microsoft';
import Imo from './views/Imo'
import Redirect from './views/Redirect'

const google_url = "https://drive.google.com/open?id=1NIE_xCq0cIvcy4LHMEyO-SoprG-kZQkv"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>
        <header>
            <div className = "w-100">
                <h1 id = "main-headline"> Hello World!  My Name is Mike Liu</h1>
            </div>

            <nav className="dt dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10 nav-text">
            {/* LEFT PADDING TO CENTER LOGO  WHEN COLLAPSED -->*/}
            <div className="dtc dn-ns w-third"></div>
            
            {/* Logo*/}
            <a className="dtc v-mid mid-gray link dim w-third w-25-ns tc tl-ns mb2 mb0-ns" title="Home" href="https://cs.illinois.edu/">
              <img src={illini} className="dib w2 h2" alt="Hello World My Name is Mike!">
              </img>
            </a>
            
            {/* Link Menu-->*/}
            <div id="menu" className="static-ns absolute mt5 mt0-ns left-100 db dtc-ns v-mid w-50 w-100-ns w-75-ns h-80 tr">
              
              <Link to="/" className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" title="Home">Home</Link>
              <a className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" href={google_url} title="Resume">Resume</a>          
              <Link to="/work" className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" title="Work Experience">Work Experience</Link>
              <Link to="/portfolio" className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" title="Projects">Portfolio</Link>
              <Link to="/ask_me_anything" className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" title="Ask Me Anything">Ask Me Anything!</Link>              
              <Link to="/musical" className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr4 mr4-ns" title="Musical Surprise">Musical Surprise</Link>
            </div>
            
            {/* Expand menu*/}
            {/* Todo figure out how this expand menu works*/}
            <a id="menu-btn" className="dtc tr v-mid dn-ns w-third pr2 p0-ns link dim dark-gray">
              Menu
            </a>
          </nav>
        </header>
          <section className="main">
              <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/food" component = {Food}/>
              <Route exact path="/musical" component={Musical}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/work" component={WorkExperience}/>
              <Route exact path="/ask_me_anything" component={AskMeAnything}/>
              <Route exact path="/microsoft" component={Microsoft}/>
              <Route exact path="/imo" component={Imo}/>
              <Route component={Redirect}/>
            </Switch>
          </section>

        <Footer id="my-footer"/>
        
        </div>
        </Router>
      </div>);

    

  }
}

export default App;
