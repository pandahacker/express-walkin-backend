const express = require('express');
const router = express.Router();
const WalkIn = require('./models/walkin')


//get people that have signed into the front desk
router.get('/signedin', function (req, res, next){
    if (req.query.loc == undefined){
        WalkIn.find({claimed: true}).then(function (walkins) {
            console.log(`retreiving sign ins`);
            res.send(walkins);
        }).catch(next);
    }
    else {
        WalkIn.find({ office: req.query.loc, claimed: false }).then(function (walkins) {
            console.log(`retreiving sign ins from ${req.query.loc}`);
            res.send(walkins);
        }).catch(next);
    }
    
});
router.get('/reporting', function (req, res, next) {
    WalkIn.find({claimed: true }).then(function (walkins) {
        console.log(`retreiving past walk ins`);
        res.send(walkins);
    }).catch(next);
});

//add a new member into the queue
router.post('/register', function (req, res, next) {
    WalkIn.create(req.body).then(function(walkins){
        console.log(`Adding user ${req.body.name}`);
        res.send(walkins);
    }).catch(next);
});

//modify existing walk in
router.put('/claim/:id', function (req, res, next) {
    WalkIn.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(walkins){
        res.send(walkins);
    }).catch(next);
});

module.exports = router;
