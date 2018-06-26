import React from 'react';
import Axios from 'axios';

import './AskMeAnything.css';
import luis from '../images/common/luis.png'

import firebase from 'firebase/app';
import 'firebase/auth';


let HOST = ""
if (process.env.NODE_ENV === 'production'){
    HOST = "https://mikeliu8492.herokuapp.com"
}
else {
    HOST = "https://wwww.localhost:5000"
}

class AskMeAnything extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: '',
                      answer: 'Please ask your question about me in box above.'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        const payload = encodeURI(this.state.value)

        firebase.auth().currentUser.getIdToken(false)
        .then(token => {
            const config = {
                headers: {'Authorization': `Bearer ${token}`}
            };

            return Axios.post(`${HOST}/api/luis`, {question: payload}, config)
        })
        .then (response => {
            this.setState({
                answer: response.data.message
            })
        })
        .catch(err => {
            this.setState({
                answer: `Something went wrong; please try again later.`
            })
            console.log(err.toString())
        })
        .finally(() =>{
            this.setState({
                value: ''
            })
            event.preventDefault();
        })

        
        
    }

    render() {
        return (<div className="my-5">
            <h1>Ask Me Anything!</h1>
            <br/>
            <p>This is a 
                <a href="https://azure.microsoft.com/en-us/services/cognitive-services/language-understanding-intelligent-service/">
                    <span className="link-in-body font-weight-bold"> Microsoft LUIS </span>
                </a> 
                Bot I trained to answer questions about me (within reason of course).  It mainly talks about
                my recreational hobbies, favorite foods, and pop culture items I like, amongst others.
            </p>

            <p>You can ask a question about me, and it will answer to its best ability. This is meant as a fun activity and NOT a means to sleuth in-depth information about me.
                Of course, you can always contact me by <a href="mailto:mikeliu8492@gmail.com"><span className="link-in-body font-weight-bold">e-mail</span></a>.
            </p>

            <p> <em>Instructions:  </em> You can say "hello" (or some variant) to my bot and it will greet you.  Otherwise, ask it
                questions specifically relate to categories of my personal preference (e.g. "What kind of music do you like?").  It 
                is not equipped to answer yes/no questions... yet.  Please enjoy!
            </p>
            
            <div style={{width: "90%"}}>
                
                <div align="center" className="my-4">
                    <h2>
                        Question Time!
                    </h2>
                </div>
                <br/>


                <div className="row">
                    <div className="col-3-md m-5" align="center">
                        <img src={luis} alt="LUIS"></img>
                        <div align="center" className="mt-3">                                                    
                            <input id="luis-submit-button" className="btn btn-dark" type="submit" value="Ask Me A Question!" onClick={this.handleSubmit} style={{display: "block"}}/>
                        </div>
                    </div>
                    <div className="col-9-md m-5">
                        <form>
                            <textarea placeholder="Enter your question here..." value={this.state.value} rows="10" cols="70" onChange={this.handleChange}></textarea>
                        </form>
                    </div>
                </div>            
            </div>

            <br/>


                <p id="response-box">
                    {this.state.answer}
                </p>
            
            <br/>
        </div>)
    }
   
}

export default AskMeAnything;


/*
                <div>
                    <div style={{float: "left", width: "20%"}}>
                        <img src={luis} alt="luis"></img>
                        <div style={{display: "flex", justifyContent: "center"}}>                                                    
                            <input className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black"type="submit" value="Ask Me A Question!" onClick={this.handleSubmit} style={{display: "block"}}/>
                        </div>

                    </div>
                </div>
                <div style={{float: "right", width: "80%", padding: "0px 10px 10px 50px", display: "flex"}}>
                    <form>
                        <textarea style={{boxSizing:"border-box", height: "100%"}} value={this.state.value} rows="10" cols="70" onChange={this.handleChange}>Enter text here...</textarea>
                    </form>
                </div>


 */