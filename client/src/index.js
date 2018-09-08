import jquery from 'jquery/dist/jquery.min.js';
import popperJS from 'popper.js';
import boostrapCSS from 'bootstrap/dist/css/bootstrap.min.css';
import boostrapJS from 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
