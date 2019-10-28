const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

//connect to mongoDB
mongoose.connect('mongodb://127.0.0.1/walkIns');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
      return res.status(200).json({});
  }
  next();
});

//initialize routes
app.use('/api', require('./api'));

//Error Handling
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message,});
});

app.listen(4000, function(){
    console.log(`Listening on port 4000`);
});
