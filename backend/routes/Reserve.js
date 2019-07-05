const express = require("express");
const router = express.Router();

const Reserve = require("../models/Reserve");

router.post("/add-reserve", (req, res) => {

    let reserveFields = {};
  if (req.body.item) reserveFields.item = req.body.item;
  if (req.body.requester) reserveFields.requester = req.body.requester;
  if (req.body.startdate) reserveFields.startdate = req.body.startdate;
  if (req.body.duration) reserveFields.duration = req.body.duration;
  if (req.body.Comments) reserveFields.Comments = req.body.Comments;

  new Reserve(reserveFields)
    .save()
    .then(reserve => res.json(reserve))
    .catch(err => console.log(err));
});

router.get("/reserves", (req, res) => {
    //   db.collection("usersContacts")
    //     .find()
    //     .toArray((err, data) => {
    //       if (err) res.send("Can't show contact list");
    //       else res.send(data);
    //     });
    Reserve.find()
      .then(reserves => res.json(reserves))
      .catch(err => console.log(err));
  });

router.put("/modify-reserve/:id", (req, res) => {
    //   let id = ObjectID(req.params.id);
    //   db.collection("usersContacts").findOneAndUpdate(
    //     { _id: id },
    //     { $set: { ...req.body } },
    //     (err, data) => {
    //       if (err) res.send("can't modify contact");
    //       else res.send(data);
    //     }
    //   );
    Reserve.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    )
      .then(updated => res.json(updated))
      .catch(err => console.log(err));
  });

  router.delete("/delete-reserve/:id", (req, res) => {
    Reserve.findOneAndDelete({ _id: req.params.id })
      .then(deleted => res.json({ message: "done" }))
      .catch(err => console.log(err));
  });
  
  module.exports = router;

