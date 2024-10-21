import mongoose from "mongoose";

const AboutSchema = mongoose.Schema({
  aboutdescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const About = mongoose.model("About", AboutSchema);

export default About;
