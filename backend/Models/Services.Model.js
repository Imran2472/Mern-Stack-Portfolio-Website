import mongoose from "mongoose";

const ServicesSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creatAt: {
    type: Date,
    default: Date.now(),
  },
});

const Services = mongoose.model("Services", ServicesSchema);

export default Services;
