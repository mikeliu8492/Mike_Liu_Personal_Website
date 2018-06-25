import React, {Component} from 'react';
import Slideshow from '../components/Slideshow'

class Imo extends Component{
    
    constructor(){
        super()
        this.state = {
            images: []
        }
    }

    componentWillMount(){
        let list = [
            "https://drive.google.com/uc?id=1J-elc7LPIRy-__ie-MIwWHBH7mOML3pC",
            "https://drive.google.com/uc?id=199DjdThzCXqQCEgeHiMZ6z9jHL40LeGx",
            "https://drive.google.com/uc?id=1AkhjV-fW_UFrBdGSHaBopTnCcqrX4zLL",
            "https://drive.google.com/uc?id=1h0XRehe8tPAjIXxIFcGb3ORTukEPnwO9",
            "https://drive.google.com/uc?id=1c4RwzVNQkg2Gsvr7V-UgLzHhCnfFI2Zg",
            "https://drive.google.com/uc?id=1fxeKvldi5mSPXw6fHxblfrMZNTfV1slY",
            "https://drive.google.com/uc?id=13PiSzAWYysbFTHbIzHlxbqZvFxyJeIJ4"
       ]

        this.setState({
            images: list
        })
    }
    
    render() {
        return (
        
        <div class="my-5">
            <h1>A Summer in UIUC's Research Park</h1>
            <br/>
            <div class="my-3">
                <Slideshow images={this.state.images}/>
            </div>

            <section class="my-5">
                <h4>The Summer I Learned SQL Well</h4>
                <br/>
                <p>This was such an educational and fun summer, where I underwent a hybridized role in Health Information Management(HIM) and SQL development for QA. The company is called Intelligent Medical Objects(IMO), and they are essentially the "Intel Inside"
                    when it comes to the terminology middleware used by the most prominent Electronic Health Record developers such as Epic and Cerner. So in addition to CS students, we got many Linguistics and Health/Life Sciences students in this internship joining
                    the Ops team to sort out vocabulary given to us by numerous clients. Moreoever, I got a chance to mentor someone who is now going to med school because of our collaboration. And got well fed for 3 weeks by the company (one of which was Oreo week).
                </p>

                <p>Through this internship that extended into the academic year, I was able to do quality assurance work for our HIM professionals that ensures IMO remains
                    <a href="https://www.e-imo.com/news/intelligent-medical-objects-imo-announces-growth-investment-warburg-pincus" target="_blank" rel="noopener noreferrer"> <span className="link-in-body font-weight-bold">the most widely accepted medical terminology solution worldwide</span></a>. This work mostly consisted of ad-hoc SQL
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