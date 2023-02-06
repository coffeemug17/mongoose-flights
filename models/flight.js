//This is where the schema goes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN'],
        default: 'DEN'
    },
    flightNo: {
        type:Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Number,
        default: function() {
            return new Date().getFullYear + 1;
        }
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);