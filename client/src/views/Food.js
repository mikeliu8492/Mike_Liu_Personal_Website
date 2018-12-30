import React, {Component} from 'react';
import Slideshow from '../components/Slideshow';

import './Musical.css'

class Food extends Component {

    state = {
        imageUrl: "5c2815963d457d314c5f488e"
    }


    render() {
        return (
        
        <div className="my-5">
            <h1>Your Virtual Food Tour With Music</h1>
            
            <br/>
            <div>
                <Slideshow imageUrl={this.state.imageUrl}/>
            </div>
            
            <br/>
            <br/>
    
            <div align="center">
                <audio src="https://drive.google.com/uc?id=1S1I8G7F4P-1gxh7xQ93vNs1JDgRaDJAB" controls={true} controlsList="nodownload"></audio>
            </div>

            <div className="mt-5">
                <h3>Your Virtual Food Tour With Music</h3>

                <p>I'm sorry I couldn't resist posting up some great, stylized food pictures I have taken in the past. Also, enjoy music that makes you think of food (especially sweets) that is a piano cover of "Pure Imagination" from "Willy Wonka and the Chocolate
                    Factory" by <a href="https://www.amazon.com/Pure-Imagination-From-Willy-Wonka/dp/B0012AH7JE" target="_blank" rel="noopener noreferrer"> <span className="link-in-body font-weight-bold">Emile Pandolfi</span></a>. Just click the <b>PLAY</b> button to enjoy with slideshow.
                </p>
            </div>
            <br/>
        </div>)
    }
}

export default Food;