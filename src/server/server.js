import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

import App from '../components/App';

const PORT = 4242;

const server = express();
server.use(express.static('dist'));

server.get('/*', (req, res) => {
    const store = createStore(reducers);

    const initialMarkup = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        </Provider>
    );

    res.send(`
        <html>
            <head>
                <title>MERN Booking App</title>
            </head>
            <body>
                <div id="root">${initialMarkup}</div>
                <script src="/main.js"></script>
            </body>
        </html>
    `);
});

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));