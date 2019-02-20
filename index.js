const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

//connect to mongoDB
mongoose.connect('mongodb://172.17.0.3/walkIns');

app.use(bodyParser.json());
//initialize routes
app.use('/api', require('./api'));

app.listen(4000, function(){
    console.log(`Listening on port 4000`);
});
