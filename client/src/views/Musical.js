import React, {Component} from 'react';
import Slideshow from '../components/Slideshow'

import image0 from '../images/nature/picture0.jpg';
import image1 from '../images/nature/picture1.jpg';
import image2 from '../images/nature/picture2.jpg';
import image3 from '../images/nature/picture3.jpg';
import image4 from '../images/nature/picture4.jpg';
import image5 from '../images/nature/picture5.jpg';
import image6 from '../images/nature/picture6.jpg';
import image7 from '../images/nature/picture7.jpg';
import image8 from '../images/nature/picture8.jpg';
import image9 from '../images/nature/picture9.jpg';
import image10 from '../images/nature/picture10.jpg';
import image11 from '../images/nature/picture11.jpg';
import lavenderhills from '../music/lavenderhills.mp3';


import './Musical.css'


class Musical extends Component {

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
           image7,
           image8,
           image9,
           image10,
           image11
       ]

        this.setState({
            images: list
        })
    }

    render() {
        return (<div>
            <h1>This is a pleasant musical surprise.  Enjoy the nature pictures.</h1>
            
            <br/>
            <div>
                <Slideshow images={this.state.images}/>
            </div>
            
            <br/>
            <br/>

            <div align="center">
                <audio src={lavenderhills} controls={true} controlsList="nodownload"></audio>
            </div>

            <section>
                <h3>Your Nice Surprise</h3>
                <p>A pretty song called "Lavender Hills" by <b><a href="https://www.amazon.com/Lavender-Hills/dp/B0013PDGWU" target="_blank" rel="noopener noreferrer">Brian Crain</a></b> to pretty pictures of nature. Just click the <b>PLAY</b> button to enjoy with slideshow.</p>
            </section>
            <br/>
        </div>)
    }
}

export default Musical;