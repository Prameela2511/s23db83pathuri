const mongoose = require("mongoose")
const catSchema = mongoose.Schema({
cat_color: String,
cat_breed: {type:String,length:15},
cat_price: {type:Number,min:1000,max:100000}
})
module.exports = mongoose.model("cat",catSchema)