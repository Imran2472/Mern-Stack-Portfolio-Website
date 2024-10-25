import express from "express";
import { Login, Profile, Register } from "../Controllers/Login.Controller.js";
import { Authorizations } from "../config/Validation.js";
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/profile", Authorizations, Profile);
export default router;
