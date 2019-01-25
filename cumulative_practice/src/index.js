import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './components/counter';

ReactDOM.render(<Counter />, document.getElementById('root'));


serviceWorker.unregister();
