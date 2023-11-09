const mongoose = require('mongoose');

const catSchema = mongoose.Schema({
    cat_color: String,
    cat_breed: String,
    cat_price: Number,
});

module.exports = mongoose.model('cat', catSchema);
