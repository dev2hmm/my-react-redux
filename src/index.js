import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store/customer.store';

import * as serviceWorker from './serviceWorker';
const APPSTORE = <Provider store={store}>
    <App />
</Provider>
ReactDOM.render(APPSTORE, document.getElementById('root'));
