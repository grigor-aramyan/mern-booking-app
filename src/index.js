import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';

ReactDOM.hydrate(
    <Provider store={store}>
        <Router>
            <Route exact path="/" render={ () => <App /> } />
            <Route path="/*" render={ () => {
                return(
                    <div>
                        Components yet to be implemented!
                    </div>
                );
            }} />
        </Router>
    </Provider>,
    document.getElementById('root')
);