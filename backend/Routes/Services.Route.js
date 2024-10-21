import express from "express";
import {
  CreatServices,
  DeleteServices,
  GetAllServices,
  GetSingleServices,
  UpdateServices,
} from "../Controllers/Services.Controller.js";
import upload from "../config/upload.js";

const router = express.Router();

router.post("/creat-services", upload.single("image"), CreatServices);
router.put("/creat-update/:id", upload.single("image"), UpdateServices);
router.get("/:id", GetSingleServices);
router.get("/", GetAllServices);
router.delete("/:id", DeleteServices);

export default router;
