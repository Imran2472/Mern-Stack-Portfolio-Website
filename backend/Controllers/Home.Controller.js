import cloudinary from "../config/cloudinary.js";
import Home from "../Models/Home.Model.js";
import fs from "fs";
export const AddDataHome = async (req, res) => {
  try {
    const { subtitle, title, description, buttontext, buttonlink } = req.body;
    const file = req.file;
    if (file) {
      const result = await cloudinary.uploader.upload(file.path);
      fs.unlinkSync(file.path);
      const homedata = new Home({
        subtitle,
        title,
        description,
        buttontext,
        buttonlink,
        image: result.secure_url,
      });
      await homedata.save();
      res
        .status(201)
        .json({ success: true, message: "Home creat successfully", homedata });
    } else {
      res.json({ success: false, message: "image is required" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error While Creat Home", error.message);
  }
};

export const UpdateHome = async (req, res) => {
  try {
    const { subtitle, title, description, buttontext, buttonlink } = req.body;
    const file = req.file;
    const id = req.params.id;

    const home = await Home.findById(id);
    if (file) {
      await cloudinary.uploader.destroy(home.image);
      const result = await cloudinary.uploader.upload(file.path);
      home.image = result.secure_url;
    }
    home.subtitle = subtitle;
    home.title = title;
    home.description = description;
    home.buttontext = buttontext;
    home.buttonlink = buttonlink;
    await home.save();
    res
      .status(200)
      .json({ success: true, message: "Home updated successfully", home });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    console.log("Error While Updating Home", error.message);
  }
};

export const GetHome = async (req, res) => {
  try {
    const home = await Home.find();
    res.json({ success: true, message: "Fetch Home Successfully", home });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log("Error While Getting Home", error.message);
  }
};

export const GetSingleHome = async (req, res) => {
  try {
    const id = req.params.id;
    const home = await Home.findById(id);
    if (!home) {
      return res.json({ success: false, message: "Home not found" });
    }
    res.json({
      success: true,
      message: "Fetch Single Home Successfully",
      home,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log("Error While Getting Single Home", error.message);
  }
};
