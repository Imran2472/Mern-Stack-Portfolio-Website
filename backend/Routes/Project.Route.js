import express from "express";
import {
  CreatProject,
  DeleteProject,
  GetAllProject,
  GetSingleProject,
  UpdateProject,
} from "../Controllers/Project.Controller.js";
import upload from "../config/upload.js";

const router = express.Router();

router.post("/creat-project", upload.single("image"), CreatProject);
router.get("/:id", GetSingleProject);
router.put("/:id", upload.single("image"), UpdateProject);
router.get("/", GetAllProject);
router.delete("/:id", DeleteProject);

export default router;
