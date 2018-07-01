import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'tachyons';


import './App.css';
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
import Header from './components/Header'

import firebase from 'firebase/app';
import 'firebase/auth';

class App extends Component {

  componentWillMount() {
    
      const config = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DB_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
      };

      firebase.initializeApp(config);
      
      const {currentUser} = firebase.auth()

      if(currentUser === null) {
        firebase.auth().signInWithEmailAndPassword(process.env.REACT_APP_USERNAME, process.env.REACT_APP_PASSWORD)
        .then(result => {})
        .catch(err => {
          console.log(err.toString())
        })
      }
  }
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <Header></Header>
          <div className ="mt-3">
            <section className="container">
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
          </div>
          <Footer/>
        
        </div>
        </Router>
      </div>);

    

  }
}

export default App;