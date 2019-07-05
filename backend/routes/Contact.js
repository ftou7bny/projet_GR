const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// const passport = require("passport");

const Contact = require("../models/Contact");
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));
// router.post("/register", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   User.findOne({ email }).then(user => {
//     if (user) {
//       return res.json({ msg: "user already exist" });
//     }
//     const newUser = new Contact({
//       name: name,
//       email: email,
//       password: password
//     });

// router.post("/login", (req, res) => {
//   const fullName = req.body.fullName;
//   const password = req.body.password;

//   Contact.findOne({ fullName }).then(contact => {
//     if (!contact) {
//       return res.json({ msg: "Pseudo not found" });
//     }
//     bcrypt.compare(password, contact.password).then(isMatched => {
//       if (isMatched) {
//         const payload = { id: contact.id, fullName: user.fullName };
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           { expiresIn: 3600 },
//           (err, token) => {
//             if (err) throw err;
//             res.json({ token: "Bearer " + token });
//           }
//         );
//       } else {
//         return res.json({ msg: "password incorrect" });
//       }
//     });
//   });
// });
// router.get(
//   "/current",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     res.json(req.contact);
//   }
// );


router.post("/add-contact", (req, res) => {
  //   let newContact = req.body;
  //   db.collection("usersContacts").insertOne(newContact, (err, data) => {
  //     if (err) res.send("Can't add new contact");
  //     else res.send("New contact added");
  //   });
  let contactFields = {};
  if (req.body.fullName) contactFields.fullName = req.body.fullName;
  if (req.body.password) contactFields.password = req.body.password;

  if (req.body.email) contactFields.email = req.body.email;
  if (req.body.mobile) contactFields.mobile = req.body.mobile;
  if (req.body.city) contactFields.city = req.body.city;

  new Contact(contactFields)
    .save()
    .then(contact => res.json(contact))
    .catch(err => console.log(err));
});

router.get("/contacts", (req, res) => {
  //   db.collection("usersContacts")
  //     .find()
  //     .toArray((err, data) => {
  //       if (err) res.send("Can't show contact list");
  //       else res.send(data);
  //     });
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => console.log(err));
});

router.put("/modify-contact/:id", (req, res) => {
  //   let id = ObjectID(req.params.id);
  //   db.collection("usersContacts").findOneAndUpdate(
  //     { _id: id },
  //     { $set: { ...req.body } },
  //     (err, data) => {
  //       if (err) res.send("can't modify contact");
  //       else res.send(data);
  //     }
  //   );
  Contact.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { ...req.body } },
    { new: true }
  )
    .then(updated => res.json(updated))
    .catch(err => console.log(err));
});

router.delete("/delete-contact/:id", (req, res) => {
  Contact.findOneAndDelete({ _id: req.params.id })
    .then(deleted => res.json({ message: "done" }))
    .catch(err => console.log(err));
});

module.exports = router;
