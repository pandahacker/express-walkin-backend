const express = require('express');
const router = express.Router();
const WalkIn = require('./models/walkin')


//get people that have signed into the front desk
router.get('/signedin', function (req, res, next){
    WalkIn.find({ claimed: false }).then(function(walkins){
        res.send(walkins);
    }).catch(next);
});

//add a new member into the queue
router.post('/register', function (req, res, next) {
    WalkIn.create(req.body).then(function(walkins){
        res.send(walkins);
    }).catch(next);
});

//modify existing walk in
router.put('/register/:id', function (req, res, next) {
    res.send({ type: 'PUT' });
});

module.exports = router;
