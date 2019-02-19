const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
//initialize routes
app.use('/api', require('./api'));

app.listen(4000, function(){
    console.log(`Listening on port 4000`);
});

