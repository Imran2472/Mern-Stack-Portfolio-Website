import express from "express";
import {
  CreatContact,
  DeleteContact,
  GetContact,
} from "../Controllers/Contact.Controller.js";
import { Authorizations } from "../config/Validation.js";

const router = express.Router();

router.post("/usercontact", CreatContact);
router.get("/", Authorizations, GetContact);
router.delete("/:id", Authorizations, DeleteContact);

export default router;
