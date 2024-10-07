const mongoose = require('mongoose');

const fruitsSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
});

const Fruit = mongoose.model('Fruit', fruitsSchema);

module.exports = Fruit;