import express from "express";
import {
  CreatContact,
  DeleteContact,
  GetContact,
} from "../Controllers/Contact.Controller.js";

const router = express.Router();

router.post("/usercontact", CreatContact);
router.get("/", GetContact);
router.delete("/:id", DeleteContact);

export default router;
