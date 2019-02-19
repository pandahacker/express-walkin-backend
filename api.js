const express = require('express');
const router = express.Router();


//get people that have signed into the front desk
router.get('/signedin', function(req, res){
    console.log(req.body);
    res.send({type:'GET'});
});

//add a new member into the queue
router.post('/register', function (req, res) {
    res.send({ type: 'POST' });
});

//modify existing walk in
router.put('/register/:id', function (req, res) {
    res.send({ type: 'PUT' });
});

module.exports = router;
