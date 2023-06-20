const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Tour must be have name'],
        unique: true
    },
    rating: {
        type: Number,
        required: [true,'A Tour must have a rating']
    },
    price: {
        type: Number,
        required: [true, 'A Tour must have a Price']
    }
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;