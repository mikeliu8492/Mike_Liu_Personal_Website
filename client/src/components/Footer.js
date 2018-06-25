import React from 'react';
import mern from '../images/common/mern.png'
import bootstrapImage from '../images/common/bootstrap.png'

import facebook from '../images/common/facebook.png'
import linkedin from '../images/common/linkedin.png'
import github from '../images/common/github.png'


import './Footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="row" style={{minHeight: "400px"}}>
                <div id="contacts-title" className="col-4 pt-5" >
                    <h4>Contact Information</h4>
                    <br/>
                    <p className="mb-4"><a href="mailto:mikeliu8492@gmail.com"><span className="text-dark"><b>mikeliu8492@gmail.com</b></span></a></p>


                    <ul className="contact-icon">
                        <li className="contact-icon"><a href="https://www.facebook.com/mike.liu.129"><img src={facebook} className="icon" alt="facebook page"></img></a></li>
                        <li className="contact-icon"><a href="https://www.linkedin.com/in/mikeliu8492/"><img src={linkedin} className="icon" alt="linkedin page"></img></a></li>
                        <li className="contact-icon"><a href="https://github.com/mikeliu8492"><img src={github} className="icon" alt="github repo"></img></a></li>
                    </ul>
                </div>
                <div id="bootstrap-title" className="col-4 pt-5">
                    <h4 className="mb-4">Made With Bootstrap</h4>
                    <a href="https://getbootstrap.com/"><img id="bootstrap-image" src={bootstrapImage} alt="Made with Bootstrap"></img></a>
                </div>
                <div id="mern-title" className="col-4 pt-5">
                    <h4 className="mb-4">Powered by MERN</h4>
                    <a href="https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/"><img src={mern} alt="Powered by Mern"></img></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer