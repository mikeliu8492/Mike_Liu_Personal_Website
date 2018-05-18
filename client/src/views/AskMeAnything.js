import React from 'react';
import Axios from 'axios';

import './AskMeAnything.css';
import luis from '../images/common/luis.png'

let HOST = ""
if (process.env.NODE_ENV === 'production'){
    HOST = "https://mikeliu8492.herokuapp.com"
}
else {
    HOST = "http://wwww.localhost:5000"
}

class AskMeAnything extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: '',
                      answer: 'Please ask your question about me.'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        let payload = encodeURI(this.state.value)

        Axios.post(`${HOST}/api/luis`, {question: payload})
        .then (response => {
            this.setState({
                answer: response.data.message
            })
        })
        .catch(err => {
            this.setState({
                answer: `Something went wrong; please try again later.`
            })
        })
        .finally(() =>{
            this.setState({
                value: ''
            })
        })

        event.preventDefault();
        
    }

    render() {
        return (<div>
            <h1>Ask Me Anything!</h1>

            <p>This is a Microsoft LUIS Bot I trained to answer questions about me (within reason of course).  It mainly talks about
                my recreational hobbies, favorite foods, and pop culture items I like, amongst others.
            </p>

            <p>You can ask a question about me, and it will answer to its best ability. This is meant as a fun activity and NOT a means to sleuth in-depth information.
                Of course, you can always contact me by <a href="mailto:mikeliu8492@gmail.com">e-mail</a>.
            </p>

            <p> <em>Instructions:  </em> You can say "hello" (or some variant) to my bot and it will greet you.  Otherwise, ask it
                questions specifically relate to categories of likes (e.g. what kind of music do you like).  It is not equipped to answer yes/no questions... yet.
                Please enjoy!
            </p>
            
            <div style={{width: "90%"}}>
                <h2 style={{textAlign: "center"}}>
                    Question Time!
                </h2>
                <br/>
                <div>
                    <div style={{float: "left", width: "20%"}}>
                        <img src={luis} alt="luis"></img>
                        <div style={{display: "flex", justifyContent: "center"}}>                                                    
                            <input className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black"type="submit" value="Ask Me A Question!" onClick={this.handleSubmit} style={{display: "block"}}/>
                        </div>

                    </div>
                </div>
                <div style={{float: "right", width: "80%", padding: "0px 10px 10px 50px"}}>
                    <div>
                        <form>
                            <textarea value={this.state.value} rows="10" cols="70" onChange={this.handleChange}>Enter text here...</textarea>
                        </form>
                    </div>
                </div>
 
            
            </div>

            <br style={{clear: "both"}}/>
            <br/>


                <p id="response-box">
                    {this.state.answer}
                </p>
            
            <br/>
        </div>)
    }
   
}

export default AskMeAnything;