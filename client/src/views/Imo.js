import React, {Component} from 'react';
import Slideshow from '../components/Slideshow'

import image0 from '../images/work/imo/picture0.jpg';
import image1 from '../images/work/imo/picture1.jpg';
import image2 from '../images/work/imo/picture2.jpg';
import image3 from '../images/work/imo/picture3.jpg';
import image4 from '../images/work/imo/picture4.jpg';
import image5 from '../images/work/imo/picture5.jpg';
import image6 from '../images/work/imo/picture6.jpg';


class Imo extends Component{
    
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
       ]

        this.setState({
            images: list
        })
    }
    
    render() {
        return (
        
        <div style={{marginBottom: "50px"}}>
            <h1>A Summer in UIUC's Research Park</h1>
            
            <div style={{}}>
                <Slideshow images={this.state.images}/>
            </div>

            <section>
                <h4>The Summer I Learned SQL Well</h4>

                <p>This was such an educational and fun summer, where I underwent a hybridized role in Health Information Management(HIM) and SQL development for QA. The company is called Intelligent Medical Objects(IMO), and they are essentially the "Intel Inside"
                    when it comes to the terminology middleware used by the most prominent Electronic Health Record developers such as Epic and Cerner. So in addition to CS students, we got many Linguistics and Health/Life Sciences students in this internship joining
                    the Ops team to sort out vocabulary given to us by numerous clients. Moreoever, I got a chance to mentor someone who is now going to med school because of our collaboration. And get well fed for 3 weeks by the company (one of which was Oreo week).
                </p>

                <p>Through this internship that extended into the academic year, I was able to do quality assurance work for our HIM professionals that ensures IMO remains
                    <b><a href="https://www.e-imo.com/news/intelligent-medical-objects-imo-announces-growth-investment-warburg-pincus" target="_blank" rel="noopener noreferrer"> the most widely accepted medical terminology solution worldwide</a></b>. This work mostly consisted of ad-hoc SQL
                    reports based on business requirements to ensure adherence to HIM editorial policies and other SQL procedures as necessary to ensure our content stays current. I was also able to develop a UI in our Confluence Wiki to show data gathered from SQL
                    stored procedures so that our terminology leads could examine and improve team productivity.
                </p>

                <p>Thank you Blake, Shelly, Jane, Theresa, Katherine, John, Dr. Frank, and everyone else at IMO for taking me in when I was an unknown commodity in this industry. You have helped me grow in this field and for that I am grateful.
                </p>
            </section>
        </div>)
    }

}

export default Imo;