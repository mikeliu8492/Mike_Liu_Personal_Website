import React, {Component} from 'react';
import Slideshow from '../components/Slideshow'

import image0 from '../images/work/microsoft/picture0.jpg';
import image1 from '../images/work/microsoft/picture1.jpg';
import image2 from '../images/work/microsoft/picture2.jpg';
import image3 from '../images/work/microsoft/picture3.jpg';
import image4 from '../images/work/microsoft/picture4.jpg';
import image5 from '../images/work/microsoft/picture5.jpg';
import image6 from '../images/work/microsoft/picture6.jpg';
import image7 from '../images/work/microsoft/picture7.jpg';
import image8 from '../images/work/microsoft/picture8.jpg';
import image9 from '../images/work/microsoft/picture9.jpg';
import image10 from '../images/work/microsoft/picture10.jpg';
import image11 from '../images/work/microsoft/picture11.jpg';
import image12 from '../images/work/microsoft/picture12.jpg';
import image13 from '../images/work/microsoft/picture13.jpg';
import image14 from '../images/work/microsoft/picture14.jpg';
import image15 from '../images/work/microsoft/picture15.jpg';
import pearls from '../music/pearlsofjoy.mp3'


class Microsoft extends Component{
    
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
           image11,
           image12,
           image13,
           image14,
           image15
       ]

        this.setState({
            images: list
        })
    }
    
    render() {
        return (<div>
            <h1>West Coast, Best Coast, Microsoft!</h1>
            
            <div style={{}}>
                <Slideshow images={this.state.images}/>
            </div>

            <section>
            <h4>
                Seriously, unless you have already committed to another intern/full-time offer in writing, if even merely given the chance to interview onsite just do it to take in the environment!
                This is a pilgrimage a CS student should take if possible.
            </h4>

            <p>I thought I'd just interview gracefully, have fun on Microsoft's dime, and be humored over a weekend onsite. Never did I think I had a chance to land THIS internship! I knew I had to seize this opportunity when I heard I got a chance to intern with
                the company that aspires to "empower every person and every organization on the planet to achieve more". I learned so much this summer and crossed so many things off my bucket list. Web API's don't seem so scary when you know how to manipulate
                the resource endpoint. It has opened my eyes to new possibilities I could not have imagined before in my career journey.
            </p>

            <p>This summer, I worked with the Windows Servicing and Delivery team that own the <b><a href="https://docs.microsoft.com/en-us/windows/deployment/update/update-compliance-using" target="_blank" rel="noopener noreferrer" >Update Compliance (UC)</a></b> solution on the Operations
                Management Suite (OMS) platform to ensure that business organizations are on schedule to get the latest and greatest of Windows 10. During this internship, I worked on integrating Active Directory data into a device telemetry stream. At first,
                I didn't see the connection between the two, but then I was able to grasp identifying devices in organizational context allows for better planning around business deadlines and optimized update deployment schedules. So I wrote a proof-of-concept
                web service to do just that, and the enriched experience as demoed was well received during our all-hands meeting. Secondly, it was really intellectually challenging migrating the UC solution to accomodate a new big database query language by
                documenting best practices in the TypeScript as I examined what new data structures need parsing and how could the new query syntax be constructed. It is amazing to me that effective October 2017 some of the code I wrote will be part of helping
                build on the hard work of the team to provide accurate assessment of update deployement outcomes for the Windows 10 experience.    
            </p>

            <p><em>Update: </em> As a result of Microsoft being on the resume, I was able to sign an offer with Epic Systems.  I can now impact health in ways I could not previously have imagined during medical school.
                Moreoever, Microsoft empowered me to take on the challenge of full-stack development.  Thank you to Maggie Bott, the WSD team (that I interned for including Ranjith, Ramesh, Hari, Canek and Anil who worked most directly with me), and the internship/recruitment coordination team for everything, a truly unforgettable summer.
                And to commemorate the many engineering "pearls" Microsoft has given me, here is lovely song called "Pearls of Joy" by <b><a href="https://www.amazon.com/Pearls-of-Joy/dp/B000QQ65KC" target="_blank" rel="noopener noreferrer">Kevin Kern</a></b>. Just click the <b>PLAY</b> button to enjoy with slideshow.
            </p>
            
            <div align="center">
                <audio src={pearls} controls={true} controlsList="nodownload"></audio>
            </div>

            </section>
        </div>)
    }

}

export default Microsoft;