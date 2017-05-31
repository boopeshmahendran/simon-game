import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import GameBoard from './components/GameBoard';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<StyleRoot><GameBoard /></StyleRoot>, document.getElementById('root'));
registerServiceWorker();
