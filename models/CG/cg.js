const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create CG schema and model
const CGSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    licenseNumber: {
        type: Number
    },
    reason: {
        type: String
    }
});

const CG = mongoose.model('cg', CGSchema);
module.exports = CG;