import React from 'react';
import mern from '../images/common/mern.png'
import tachyons from '../images/common/tachyons.png'

import facebook from '../images/common/facebook.png'
import linkedin from '../images/common/linkedin.png'
import github from '../images/common/github.png'

import './Footer.css'



function Footer({ children }) {
    return (
        <footer>
            <div className="dt dt--fixed">
                <div id="contacts-title" className="dtc tc">
                   <h4>Contact Information</h4>
                    <br/>
                    <p><span><strong>My Email: </strong></span><a href="mailto:mikeliu8492@gmail.com">mikeliu8492@gmail.com</a></p>
                    <br/>
                    <ul className="contact-icon">
                        <li className="contact-icon"><a href="https://www.facebook.com/mike.liu.129"><img src={facebook} className="icon" alt="facebook page"></img></a></li>
                        <li className="contact-icon"><a href="https://www.linkedin.com/in/mikeliu8492/"><img src={linkedin} className="icon" alt="linkedin page"></img></a></li>
                        <li className="contact-icon"><a href="https://github.com/mikeliu8492"><img src={github} className="icon" alt="github repo"></img></a></li>
                    </ul>
                </div>
                <div id="tachyons-title" className="dtc tc">
                    <h4>Made With Tachyons</h4>
                    <a href="https://tachyons.io/"><img id="tachyons-image" src={tachyons} alt="Made with Tachyons"></img></a>
                </div>
                <div id="mern-title" className="dtc tc">
                    <h4>Powered by MERN</h4>
                    <a href="https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/"><img src={mern} alt="Powered by Mern"></img></a>
                </div>
            </div>           
        </footer>
    )
}
export default Footer