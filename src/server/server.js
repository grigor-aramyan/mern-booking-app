import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const PORT = 4242;

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
    const initialMarkup = ReactDOMServer.renderToString(<App />);

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