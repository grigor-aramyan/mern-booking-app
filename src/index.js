import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';

ReactDOM.hydrate(
    <Router>
        <Route exact path="/" render={ () => <App /> } />
        <Route path="/*" render={ () => {
            return(
                <div>
                    Components yet to be implemented!
                </div>
            );
        }} />
    </Router>,
    document.getElementById('root')
);