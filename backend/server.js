const express = require('express');
const expressLogging = require('express-logging')
const logger = require('logger');
const app = express();
const port = 3000;
require('./routes')(app);

app.use(expressLogging(logger));

// require('./config/enviromnent')(app, express)


app.listen(port, () => {
    console.log('App is running');
})