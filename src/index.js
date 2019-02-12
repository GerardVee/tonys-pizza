import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from './router/router';
import { BrowserRouter as Router }  from 'react-router-dom';

ReactDOM.render(
    <Router>
        <ReactRouter/>
    </Router>,
    document.getElementById('root')
);