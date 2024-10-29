import express from "express";
import {
  CreatProject,
  DeleteProject,
  GetAllProject,
  GetSingleProject,
  UpdateProject,
} from "../Controllers/Project.Controller.js";
import upload from "../config/upload.js";
import { Authorizations } from "../config/Validation.js";

const router = express.Router();

router.post(
  "/creat-project",
  upload.single("image"),
  Authorizations,
  CreatProject
);
router.get("/:id", GetSingleProject);
router.put("/:id", Authorizations, upload.single("image"), UpdateProject);
router.get("/", GetAllProject);
router.delete("/:id", Authorizations, DeleteProject);

export default router;
