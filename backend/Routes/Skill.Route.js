import express from "express";
import {
  AllSkilss,
  CreatSkill,
  DeleteSkill,
  GetSingleSkill,
  UpdateSkill,
} from "../Controllers/Skill.Controller.js";
import { Authorizations } from "../config/Validation.js";

const router = express.Router();

router.post("/creat-skills",Authorizations ,CreatSkill);
router.put("/update-skill/:id", UpdateSkill);
router.get("/", AllSkilss);
router.get("/:id", GetSingleSkill);
router.delete("/:id", DeleteSkill);

export default router;
