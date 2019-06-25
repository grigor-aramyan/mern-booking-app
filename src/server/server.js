import express from 'express';
import mongoose from 'mongoose';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from 'config';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

// Routes
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

import User from './schemas/UserSchema'

import App from '../components/App';

const PORT = 4242;

const server = express();

server.use(express.json());
server.use(express.static('dist'));

server.use('/api/users', userRoutes);
server.use('/api/auth', authRoutes);

server.get('/api/get_number', (req, res) => {
    const num = Math.floor(Math.random() * 10);

    res.json({
        number: num
    });
});

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

mongoose.connect(config.get('dbURI'), { useNewUrlParser: true, useCreateIndex: true }, function(err) {
    if (err) return console.log(err);

    server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
});

process.on('SIGINT', () => {
    mongoose.disconnect();
    process.exit();
});