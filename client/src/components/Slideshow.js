import React, {Component} from 'react';
import { Slide } from 'react-slideshow-image';
//import Axios from 'axios';

import './Slideshow.css'

class Slideshow extends Component
{
    constructor(props) {
        super(props)
        let {images} = props
        this.state = {
            imageList: images
        }
    }

    /*
    componentDidMount(){
        Axios.get(this.state.imageEndpoint)
        .then(gallery => {
            console.log(gallery.data.picture_urls)
            this.setState({
                imageList: gallery.data.picture_urls
            })
        })
    }*/
    

    render() {
        return (
            <div className="slideshow-container" style={{margin: "auto"}}>
                <Slide
                    images={this.state.imageList}
                    duration={3000}
                    transitionDuration={1000}
                />
            </div>
        )
    }

}

/*
const Slideshow = ({images, endpoint}) => {
    console.log(images, endpoint)
    return (
        <div className="slideshow-container" style={{margin: "auto"}}>
            <Slide
                images={images}
                duration={3000}
                transitionDuration={1000}
            />
        </div>
    )
}*/


export default Slideshow;