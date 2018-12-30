import React, {Component} from 'react';
import Slideshow from '../components/Slideshow';

class Epic extends Component{
    
    state = {
        imageUrl:"5c2816953d457d314c5f4891"
    }
   
    render() {
        return (
        <div className="my-5">
            <h1>Epic!  The Chronicles of the Patient's Story</h1>
            <br/>
            
            <div className="my-3">
                <Slideshow imageUrl={this.state.imageUrl}/>
            </div>

            <section className="my-5">
            <h5>
                I can't believe I got this dream job straight out of college!
            </h5>

            <br/>
            <p>
                I currently work as a Software Developer for the Problem-Oriented Charting Activity in EpicCare Ambulatory (i.e. Outpatient Clincal Product Division).
                In terms of the big picture, we are trying to streamline clinical documentation so we could more easily sort out causation/trends for individual problems
                as opposed having to search a whole encounter note for any given problem.  Mainly day-to-day I tackle software bugs, perform feature utilization analyses, and will eventually start writing newer features of User Interface.  
                This is my chance to impact the peers I know in the healthcare field!  The forces could not have converged better.
                This job combines my background of healthcare and software development, is located where I have built a personal AND professional support network, and pays very well for its geographic region.
                I hope I could utilize my knowledge of medical terminology to derive new insights for them. Now I need to make the most of it. 
                I didn't see the dots connected when I was navigation the torrential waves, but I see that they have led me to the opportunity of a lifetime. 
                I now work for a company known as much for its dominance in Health IT as it is for its humility. Epic has never gone public and has no intention of ever going public. 
                Its CEO rarely give interviews and it doesn't go out of its way to promote itself to potential customers (i.e. Hospitals and Healthcare Systems). 
                Rather, it lets the merits of its work speak for itself and thrives through building an almost irreproachable reputation. 
                I need to take a leaf out of its book and continue onto a quest for self-improvement.
            </p>

            <br/>
            <p> 
                Here is an interesting article about Epic in the New York Times:  <a href="https://www.nytimes.com/2018/12/20/business/epic-systems-campus-verona-wisconsin.html" target="_blank" rel="noopener noreferrer" ><span className="link-in-body font-weight-bold">Willy Wonka and the Medical Software Factory</span></a> 
            </p>

            </section>
        </div>)
    }

}

export default Epic;