const express = require("express");
const router = express.Router();

const Ticket = require('../models/Ticket')

router.post("/add-ticket" , (req,res)=> {
let ticketFields = {};
if(req.body.requesterTicket) ticketFields.requesterTicket = req.body.requesterTicket;
if(req.body.assignTo) ticketFields.assignTo = req.body.assignTo;
if(req.body.priority) ticketFields.priority = req.body.priority;
if(req.body.statue) ticketFields.statue = req.body.statue;
if(req.body.date) ticketFields.date = req.body.date;
if(req.body.dateLimit) ticketFields.dateLimit = req.body.dateLimit;
if(req.body.title) ticketFields.title = req.body.title;
if(req.body.discription) ticketFields.discription = req.body.discription;
if(req.body.file) ticketFields.file = req.body.file;

new Ticket(ticketFields)
.save ()
.then(ticket => res.json(ticket))
.catch(err => console.log(err));
})

router.get("/tickets", (req, res) => {
    Ticket.find()
    .then(tickets => res.json(tickets))
    .catch(err => console.log(err));
})

router.put("/modify-ticket/:id", (req,res) => {
    Ticket.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } },
        { new: true }
      )
      .then(updated => res.json(updated))
      .catch(err => console.log(err));
})

router.delete('delete-ticket/:id', (req,res) => {
    Ticket.findOneAndDelete({ _id: req.params.id })
      .then(deleted => res.json({ message: "done" }))
      .catch(err => console.log(err));
})

module.exports = router;