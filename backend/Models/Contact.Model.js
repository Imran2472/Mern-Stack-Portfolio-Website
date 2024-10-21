import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  creatAt: {
    type: Date,
    default: Date.now(),
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
