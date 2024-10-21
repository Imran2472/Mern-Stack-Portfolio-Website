import mongoose from "mongoose";

const HomeSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  subtitle: {
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
  buttontext: {
    type: String,
    required: true,
  },
  buttonlink: {
    type: String,
    required: true,
  },

  creatAt: {
    type: Date,
    default: Date.now(),
  },
});

const Home = mongoose.model("Home", HomeSchema);

export default Home;
