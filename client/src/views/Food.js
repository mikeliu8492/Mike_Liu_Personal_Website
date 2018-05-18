import React, {Component} from 'react';
import Slideshow from '../components/Slideshow';

import './Musical.css'



class Food extends Component {

    constructor(){
        super()
        this.state = {
            images: []
        }
    }

    componentWillMount(){
        let list = [
            "https://drive.google.com/uc?id=15Aau4WCnqXHUmx2wzKIjeEkE_16X9jCs",
            "https://drive.google.com/uc?id=1BfP9-hzknZ5mNuFh9z2WHWG77qapc810",
            "https://drive.google.com/uc?id=1GdVGif5F0rsvw5mMYx0cT4rk1ScJ1xpX",
            "https://drive.google.com/uc?id=1gUESkQoPOkYvCdippVQnByyzY6nsGCi5",
            "https://drive.google.com/uc?id=1fiG50jD3BMzSvWvcJy59hrpoplwECCOa",
            "https://drive.google.com/uc?id=1vGN99M5fSGL5XBOzdFkIJNewGZGOYWSw",
            "https://drive.google.com/uc?id=1G5i07OfAj2IxQyBrseWzKY0vwJdqZYvS",
            "https://drive.google.com/uc?id=1Hov_viqmH3dd_JwMfz0BJsUl-uNPS8GM"
        ]

        this.setState({
            images: list
        })
    }

    render() {
        
        return (<div>
            <h1>Your Virtual Food Tour With Music</h1>
            
            <br/>
            <div>
                <Slideshow images={this.state.images}/>
            </div>
            
            <br/>
            <br/>
    
            <div align="center">
                <audio src="https://drive.google.com/uc?id=1S1I8G7F4P-1gxh7xQ93vNs1JDgRaDJAB" controls={true} controlsList="nodownload"></audio>
            </div>

            <section>
                <h3>Your Virtual Food Tour With Music</h3>

                <p>I'm sorry I couldn't resist posting up some great, stylized food pictures I have taken in the past. Also, enjoy music that makes you think of food (especially sweets) that is a piano cover of "Pure Imagination" from "Willy Wonka and the Chocolate
                    Factory" by <b><a href="https://www.amazon.com/Pure-Imagination-From-Willy-Wonka/dp/B0012AH7JE" target="_blank" rel="noopener noreferrer"> Emile Pandolfi</a></b>. Just click the <b>PLAY</b> button to enjoy with slideshow.
                </p>
            </section>


            

            <br/>
        </div>)
    }
}

export default Food;