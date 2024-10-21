import express from "express";
import {
  AddDataHome,
  GetHome,
  GetSingleHome,
  UpdateHome,
} from "../Controllers/Home.Controller.js";
import upload from "../config/upload.js";

const router = express.Router();

router.post("/creat-home", upload.single("image"), AddDataHome);
router.put("/update-home/:id", upload.single("image"), UpdateHome);
router.get("/", GetHome);
router.get("/single/:id", GetSingleHome);

export default router;
