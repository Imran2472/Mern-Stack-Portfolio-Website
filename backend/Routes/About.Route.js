import express from "express";
import {
  creatAbout,
  GetAbout,
  UpdateABout,
  GetSingleAbout,
} from "../Controllers/About.Controller.js";
import upload from "../config/upload.js";
import { Authorizations } from "../config/Validation.js";
const router = express.Router();

router.post("/creat-about", upload.single("image"), Authorizations, creatAbout);
router.put(
  "/update-about/:id",
  Authorizations,
  upload.single("image"),
  UpdateABout
);
router.get("/", GetAbout);
router.get("/:id", Authorizations, GetSingleAbout);

export default router;
