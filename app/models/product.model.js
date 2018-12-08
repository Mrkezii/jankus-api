var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var monk = require("monk");
var db = monk(
  "mongodb://EmmanuelMaduwuba:festac99@ds159033.mlab.com:59033/project"
);
//var Item = ['SonyHeadphones', ]
//var Quantity = [' 36']

var myDataSchema = new Schema({
  item: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  quantity: { type: Number, require: true },
  time: { type: Date, default: Date.now },
  tax: { type: Number }
});

module.exports = mongoose.model("product.model", myDataSchema);
