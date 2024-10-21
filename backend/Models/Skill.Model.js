import mongoose from "mongoose";

const skillsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Skills = mongoose.model("Skills", skillsSchema);

export default Skills;
