// Inports the required libraries and other files.
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Sets the view engine to pug.
app.set('view engine', 'pug');
app.set('views', 'pug');

// Catches all requests that have not yet had a response sent.
app.use('/', (req, res, next) => {
    // Sets the status to 404.
    res.status(404);
    // Renders the 404 error page.
    res.sendFile(path.join(__dirname, '404.html'));
});

// Begins listening for incoming requests.
app.listen(process.env.PORT);