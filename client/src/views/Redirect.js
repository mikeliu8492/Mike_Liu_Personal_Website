import React from 'react';
import {Link} from 'react-router-dom';

const Redirect = () => {
    return(
        <div className="mt-5">
            <h1>404 Error</h1>
            <br/>
            <div align="center">
                <img src="https://drive.google.com/uc?id=1aqctg5oxXNxPdQRr350T1pJuNpy5teRj" alt="not the page you are looking for"/>
            </div>
            <br/>
            <br/>
            <p>This is not the page you are looking for (i.e. the resource does not exist)</p>
            <Link to="/home">
                <span class="link-in-body font-weight-bold"> <i class="fa fa-angle-double-left"></i>  Home </span>
            </Link>
        </div>
    )
}

export default Redirect;