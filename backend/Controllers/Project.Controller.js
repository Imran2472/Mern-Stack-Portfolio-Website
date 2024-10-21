import cloudinary from "../config/cloudinary.js";
import Project from "../Models/Project.Model.js";
import fs from "fs";
export const CreatProject = async (req, res) => {
  try {
    const { title, description, category, githublink, liveLink } = req.body;
    const file = req.file;
    if (file) {
      const result = await cloudinary.uploader.upload(file.path);
      fs.unlinkSync(file.path);
      const project = new Project({
        title,
        description,
        category,
        githublink,
        liveLink,
        image: result.secure_url,
      });
      await project.save();
      res.status(201).json({
        success: true,
        message: "Project created successfully",
        project,
      });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    console.log("Error while creating project", error.message);
  }
};

export const GetSingleProject = async (req, res) => {
  try {
    const id = req.params.id;
    const projects = await Project.findById(id);
    if (!projects) {
      return res.json({ success: false, message: "Project not found" });
    }
    res.json({
      success: true,
      message: "Project fetched successfully",
      projects,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log("Error while fetching project", error.message);
  }
};

export const UpdateProject = async (req, res) => {
  try {
    const { title, description, category, githublink, liveLink } = req.body;
    const file = req.file;
    const id = req.params.id;
    const project = await Project.findById(id);
    if (!project) {
      return res.json({ success: false, message: "Project not found" });
    }
    if (file) {
      const result = await cloudinary.uploader.upload(file.path);
      fs.unlinkSync(file.path);
      project.image = result.secure_url;
    }
    project.title = title;
    project.description = description;
    project.category = category;
    project.githublink = githublink;
    project.liveLink = liveLink;
    await project.save();
    res.json({
      success: true,
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    console.log("Error while updating project", error.message);
  }
};

export const GetAllProject = async (req, res) => {
  try {
    const project = await Project.find();
    res.json({
      success: true,
      message: "Projects fetched successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log("Error while fetching projects", error.message);
  }
};

export const DeleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.json({ success: false, message: "Project not found" });
    }
    res.json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log("Error while deleting project", error.message);
  }
};
