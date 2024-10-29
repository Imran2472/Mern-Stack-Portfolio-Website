import express from "express";
import {
  CreatServices,
  DeleteServices,
  GetAllServices,
  GetSingleServices,
  UpdateServices,
} from "../Controllers/Services.Controller.js";
import upload from "../config/upload.js";
import { Authorizations } from "../config/Validation.js";

const router = express.Router();

router.post(
  "/creat-services",
  Authorizations,
  upload.single("image"),
  CreatServices
);
router.put(
  "/creat-update/:id",
  Authorizations,
  upload.single("image"),
  UpdateServices
);
router.get("/:id", GetSingleServices);
router.get("/", GetAllServices);
router.delete("/:id", Authorizations, DeleteServices);

export default router;
