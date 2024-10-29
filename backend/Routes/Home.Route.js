import express from "express";
import {
  AddDataHome,
  GetHome,
  GetSingleHome,
  UpdateHome,
} from "../Controllers/Home.Controller.js";
import upload from "../config/upload.js";
import { Authorizations } from "../config/Validation.js";

const router = express.Router();

router.post("/creat-home", Authorizations, upload.single("image"), AddDataHome);
router.put(
  "/update-home/:id",
  Authorizations,
  upload.single("image"),
  UpdateHome
);
router.get("/", GetHome);
router.get("/single/:id", Authorizations, GetSingleHome);

export default router;
