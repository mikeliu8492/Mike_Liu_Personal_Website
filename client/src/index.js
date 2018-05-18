import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Favicon from 'react-favicon';
import reactIcon from './images/common/favicon.ico'

ReactDOM.render(
    <div>
        <Favicon url={reactIcon} />
        <App />
    </div>, document.getElementById('root'));
registerServiceWorker();
