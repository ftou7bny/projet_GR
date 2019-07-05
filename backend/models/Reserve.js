const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReserveSchema = new Schema({
    item : {
        type : String,required: true
    },
    requester :  {
        type : String,required: true
    },
    startdate :  {
        type : Date,required: true
    },
    duration : {
        type : String,required: true
    },
    Comments : {
        type : String,required: true
    }
});

module.exports = Reserve = mongoose.model("reserves", ReserveSchema);

