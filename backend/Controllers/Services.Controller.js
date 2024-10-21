import cloudinary from "../config/cloudinary.js";
import Services from "../Models/Services.Model.js";
import fs from "fs";
export const CreatServices = async (req, res) => {
  try {
    const { title, description } = req.body;
    const file = req.file;
    if (file) {
      const result = await cloudinary.uploader.upload(file.path);
      fs.unlinkSync(file.path);
      const service = new Services({
        title,
        description,
        image: result.secure_url,
      });
      await service.save();
      res.status(201).json({
        success: true,
        message: "Service created successfully",
        service,
      });
    } else {
      res.json({
        success: false,
        message: "Image is required",
      });
    }
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while creating service", error.message);
  }
};

export const UpdateServices = async (req, res) => {
  try {
    const { title, description } = req.body;
    const file = req.file;
    const id = req.params.id;
    const service = await Services.findById(id);
    if (!service) {
      return res.json({
        success: false,
        message: "Service not found",
      });
    }
    if (file) {
      const result = await cloudinary.uploader.upload(file.path);
      fs.unlinkSync(file.path);
      service.image = result.secure_url;
    }
    service.title = title;
    service.description = description;
    await service.save();
    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      service,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while updating service", error.message);
  }
};

export const GetSingleServices = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await Services.findById(id);
    if (!service) {
      return res.json({ success: false, message: "Service not found" });
    }
    res.json({ success: true, message: "Fetch Specific Services", service });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while getting single service", error.message);
  }
};

export const GetAllServices = async (req, res) => {
  try {
    const service = await Services.find({});
    res.json({ success: true, message: "Fetch All Services", service });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while getting all services", error.message);
  }
};

export const DeleteServices = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await Services.findByIdAndDelete(id);
    if (!service) {
      return res.json({ success: false, message: "Service not found" });
    }
    res.json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while deleting service", error.message);
  }
};
