const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  password:{
    type: String,
    // default:''
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  city: {
    type:String,
  }
});

module.exports = Contact = mongoose.model("contacts", ContactSchema);



// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const ContactSchema = new Schema(
//   {
//     fullName: {
//       type: String,
//       required: 'This field is required.'
//   },
//   email: {
//       type: String
//   },
//   mobile: {
//       type: String
//   },
//   city: {
//       type: String
//   }
// }
// );
// // Custom validation for email
// contactSchema.path('email').validate((val) => {
//   emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return emailRegex.test(val);
// }, 'Invalid e-mail.');
// module.exports = Contact = mongoose.model("contacts", ContactSchema);


