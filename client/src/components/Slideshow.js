import React from 'react';
import { Slide } from 'react-slideshow-image';

import './Slideshow.css'

const Slideshow = ({images}) => {
    return (
        <div className="slideshow-container" style={{margin: "auto"}}>
            <Slide
                images={images}
                duration={3000}
                transitionDuration={1000}
            />
        </div>
    )
}


export default Slideshow;