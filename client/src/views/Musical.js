import React, {Component} from 'react';
import Slideshow from '../components/Slideshow'
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
          "https://drive.google.com/uc?id=1nmW-PMeYeL-c5L_iT-Lb1M7pPRgnAxVB",
          "https://drive.google.com/uc?id=1lQC2RSZ0wN3Fm05eZL_ZdYR7DkbFUKsY",
          "https://drive.google.com/uc?id=178skR09W5xlSVU-pNwTIZOU-p-2lhU86",
          "https://drive.google.com/uc?id=1l2VklZymjuMHcHfc0Dc5kcV_tuKPFlh9",
          "https://drive.google.com/uc?id=1OZJ6Xj7-ZlcTyqMIdwgkT684gA18CvBe",
          "https://drive.google.com/uc?id=19z8e1ndOCjic5Y9LTngMTZrIrf8smELB",
          "https://drive.google.com/uc?id=1EqNLwJz4Lf5pAkxPjEOwK3DVDMh6JQSk",
          "https://drive.google.com/uc?id=1pjsKRd57Q2DN9jCJDnahYGMT8lLBO00p",
          "https://drive.google.com/uc?id=1meNykIpsj3udcpX3hYzuayvFXg_t0BSA",
          "https://drive.google.com/uc?id=1Poj8qoxf-G48p4y3sOBAO4pmK93OzeoL",
          "https://drive.google.com/uc?id=1Vbxyb0XgvURvv1UffINZHauR6DLLS6et",
          "https://drive.google.com/uc?id=1Z_Y6bLF8pPxPoEaUnaJ9LIiDplzF3hxD"  
       ]

        this.setState({
            images: list
        })
    }

    render() {
        return (
        
        <div className="mt-5">
            <h1>This is a pleasant musical surprise.  Enjoy the nature pictures.</h1>
            
            <br/>
            <div>
                <Slideshow images={this.state.images}/>
            </div>
            
            <br/>
            <br/>

            <div align="center">
                <audio src="https://drive.google.com/uc?id=1ZRI5U9wOFssHnz6-IYjKz23BxpT7ho1N" controls={true} controlsList="nodownload"></audio>
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