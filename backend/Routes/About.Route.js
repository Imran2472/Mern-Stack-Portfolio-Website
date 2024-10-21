import express from "express";
import {
  creatAbout,
  GetAbout,
  UpdateABout,
  GetSingleAbout,
} from "../Controllers/About.Controller.js";
import upload from "../config/upload.js";
const router = express.Router();

router.post("/creat-about", upload.single("image"), creatAbout);
router.put("/update-about/:id", upload.single("image"), UpdateABout);
router.get("/", GetAbout);
router.get("/:id", GetSingleAbout);

export default router;
