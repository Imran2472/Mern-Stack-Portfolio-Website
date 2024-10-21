import express from "express";
import {
  AllSkilss,
  CreatSkill,
  DeleteSkill,
  GetSingleSkill,
  UpdateSkill,
} from "../Controllers/Skill.Controller.js";

const router = express.Router();

router.post("/creat-skills", CreatSkill);
router.put("/update-skill/:id", UpdateSkill);
router.get("/", AllSkilss);
router.get("/:id", GetSingleSkill);
router.delete("/:id", DeleteSkill);

export default router;
