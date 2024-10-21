import cloudinary from "../config/cloudinary.js";
import About from "../Models/About.Model.js";
import fs from "fs";
export const creatAbout = async (req, res) => {
  try {
    const { aboutdescription, skillsSec } = req.body;
    const file = req.file;

    if (file) {
      const result = await cloudinary.uploader.upload(file.path);
      fs.unlinkSync(file.path);
      const AboutText = new About({
        aboutdescription,
        skillsSec,
        image: result.secure_url,
      });
      await AboutText.save();
      res.status(201).json({
        success: true,
        message: "Success to create About Text",
        AboutText,
      });
    }
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error While creating About Text", error.message);
  }
};

export const UpdateABout = async (req, res) => {
  try {
    const { aboutdescription } = req.body;
    const file = req.file;
    const id = req.params.id;

    const about = await About.findById(id);
    if (file) {
      await cloudinary.uploader.destroy(about.image);
      const result = await cloudinary.uploader.upload(file.path);
      fs.unlinkSync(file.path);
      about.image = result.secure_url;
    }
    about.aboutdescription = aboutdescription;
    await about.save();
    res.json({
      success: true,
      message: "About Text updated successfully",
      about,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error While updating About Text", error.message);
  }
};

export const GetAbout = async (req, res) => {
  try {
    const about = await About.find({});
    res.json({ success: true, message: "Fetch About Successfully", about });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error While fetching About", error.message);
  }
};

export const GetSingleAbout = async (req, res) => {
  try {
    const id = req.params.id;
    const about = await About.findById(id);
    if (!about) {
      return res.json({ success: false, message: "About not found" });
    }
    res.json({
      success: true,
      message: "Spacefic About fetched successfully",
      about,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error While getting single About", error.message);
  }
};
