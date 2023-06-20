const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


mongoose.connect('mongodb://127.0.0.1/furation_tech');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connnecting to db'));
db.once('open', function () {
    console.log('Successfully connected to database');
})