import React, {Component} from 'react';
import Slideshow from '../components/Slideshow'
import './Musical.css'

class Musical extends Component {
    state = {
        imageUrl: "5b392f0c58334ad9a4ea5b6c"
    }
    
    render() {
        return (
        
        <div className="mt-5">
            <h1>This is a pleasant musical surprise.  Enjoy the nature pictures.</h1>
            
            <br/>
            <div>
                <Slideshow imageUrl={this.state.imageUrl}/>
            </div>
            
            <br/>
            <br/>

            <div align="center">
                <audio src="https://drive.google.com/uc?id=1HBb-_3gN_VIoSz6WLEEx0QwlHv7BaSYg" controls={true} controlsList="nodownload"></audio>
            </div>

            <div>
                <h3>Your Nice Surprise</h3>
                <p>A pretty song called "Lavender Hills" by <b><a href="https://www.amazon.com/Lavender-Hills/dp/B0013PDGWU" target="_blank" rel="noopener noreferrer"><span className="font-weight-bold link-in-body">Brian Crain</span></a></b> to pretty pictures of nature. Just click the <b>PLAY</b> button to enjoy with slideshow.</p>
            </div>
            <br/>
        </div>)
    }
}

export default Musical;