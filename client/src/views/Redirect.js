import React from 'react';
import {Link} from 'react-router-dom';
import droids from '../images/common/droids.gif'

const Redirect = () => {
    return(<div>
        <h1>404 Error</h1>
        <br/>
        <div style={{display: "flex", justifyContent: "center"}}>
            <img src={droids} alt="not the page you are looking for"/>
        </div>
        <br/>
        <br/>
        <p>This is not the page you are looking for (i.e. the resource does not exist)</p>
        <Link to="/home">Home</Link>
        </div>)
}

export default Redirect;