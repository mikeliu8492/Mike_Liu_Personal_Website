import React, {Component} from 'react';
import Slideshow from '../components/Slideshow';

import image0 from '../images/food/picture0.jpg';
import image1 from '../images/food/picture1.jpg';
import image2 from '../images/food/picture2.jpg';
import image3 from '../images/food/picture3.jpg';
import image4 from '../images/food/picture4.jpg';
import image5 from '../images/food/picture5.jpg';
import image6 from '../images/food/picture6.jpg';
import image7 from '../images/food/picture7.jpg';
import imagination from '../music/pureimagination.mp3'

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
            image0,
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7
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
                <audio src={imagination} controls={true} controlsList="nodownload"></audio>
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