const express = require('express');
const app = express();
const port = 3000;
app.use(express.static(__dirname + '/uploads/songs'));
app.use(express.static(__dirname + '/uploads/images'));
require('./routes')(app);

app.listen(port, () => {
    console.log('App is running');
})