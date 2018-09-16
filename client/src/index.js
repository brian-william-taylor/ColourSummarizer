import jquery from 'jquery/dist/jquery.min.js';
import popperJS from 'popper.js';
import boostrapCSS from 'bootstrap/dist/css/bootstrap.min.css';
import boostrapJS from 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import './style/index.css';
import './style/DragNDrop.css';
import './style/ColourBar.css';
import './style/loader.css';
import 'animate.css/animate.min.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
