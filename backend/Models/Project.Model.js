import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  githublink: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  creatAt: {
    type: Date,
    default: Date.now(),
  },
});

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
