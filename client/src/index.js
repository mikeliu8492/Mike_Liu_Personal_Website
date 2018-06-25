import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Favicon from 'react-favicon';
import reactIcon from './images/common/favicon.ico'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(
    <div>
        <Favicon url={reactIcon} />
        <App />
    </div>, document.getElementById('root'));
registerServiceWorker();
