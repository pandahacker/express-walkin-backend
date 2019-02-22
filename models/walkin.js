const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create CG schema and model
const WalkInSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    licenseNumber: {
        type: Number
    },
    reason: {
        type: String
    },
    time: {
        type: String
    },
    claimedBy: {
        type: String,
        default: ""
    },
    claimed: {
        type: Boolean,
        default: false
    },
    office: {
        type: String
    }
});

const WalkIn = mongoose.model('walkins', WalkInSchema);
module.exports = WalkIn;