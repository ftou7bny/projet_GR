const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    requesterTicket :  {
        type : String,
        required: true
    },
    assignTo :  {
        type : String,
        
    },
    priority :  {
        type : String
    },
    statue :  {
        type : String
    },
    date :  {
        type : Date,
        default: Date.now()
    },
    dateLimit :  {
        type : Date ,
    },
    title :  {
        type : String,   
        
    },
    discription :  {
        type : String,
     
    },
    file :  {
        type : String
    }
});

// var date =  Date.now()

// var hour = date
// var day = date.getDay()

module.exports = Ticket = mongoose.model("tickets", TicketSchema);


