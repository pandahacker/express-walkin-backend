const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create CG schema and model
const HQSchema = new Schema({
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
    claimed: {
        type: String
    }
});

const HQ = mongoose.model('cg', HQSchema);
module.exports = HQ;