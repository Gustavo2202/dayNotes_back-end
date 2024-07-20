const mogoose = require("mongoose");
const annotaionDataSchema = new mogoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
});
module.exports = mogoose.model("Annotaion", annotaionDataSchema);