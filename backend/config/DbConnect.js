import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    mongoose.connect(
      `${process.env.MONGODBURI}`,
      {
        dbName: "Portfolio",
      },
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to Mongo");
  } catch (error) {
    console.error("Failed to connect to Mongo", error);
  }
};

export default DbConnection;
