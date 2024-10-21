import Skills from "../Models/Skill.Model.js";

export const CreatSkill = async (req, res) => {
  try {
    const { title, icon, description } = req.body;
    const aboutSer = new Skills({
      title,
      icon,
      description,
    });
    await aboutSer.save();
    res.json({
      success: true,
      message: "successfully Creat Skill Section",
      aboutSer,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error While Creating Skill Section", error.message);
  }
};

export const UpdateSkill = async (req, res) => {
  try {
    const { title, icon, description } = req.body;
    const id = req.params.id;
    const skill = await Skills.findById(id);
    if (!skill) {
      return res.json({ success: false, message: "Skill not found" });
    }
    skill.title = title;
    skill.icon = icon;
    skill.description = description;
    await skill.save();
    res.json({
      success: true,
      message: "Skill Updated Successfully",
      skill,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error While Updating Skill", error.message);
  }
};

export const AllSkilss = async (req, res) => {
  try {
    const skill = await Skills.find({});
    res.json({ success: true, message: "Fetch Skill Successfully", skill });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error While Fetching Skill", error.message);
  }
};

export const GetSingleSkill = async (req, res) => {
  try {
    const id = req.params.id;
    const skill = await Skills.findById(id);
    if (!skill) {
      return res.json({ success: false, message: "Skill not found" });
    }
    res.json({
      success: true,
      message: "Fetch Specific Skill Successfully",
      skill,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error While Fetching Skill", error.message);
  }
};

export const DeleteSkill = async (req, res) => {
  try {
    const id = req.params.id;
    const skill = await Skills.findByIdAndDelete(id);
    if (!skill) {
      return res.json({ success: false, message: "Skill not found" });
    }
    res.json({ success: true, message: "Skill Deleted Successfully" });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error While Deleting Skill", error.message);
  }
}