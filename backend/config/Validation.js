import jwt from "jsonwebtoken";
import User from "../Models/Login.Model.js";

export const Authorizations = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.json({ message: "Token is required" });
    }
    const decoded = jwt.verify(token, process.env.SECERATE_KEY);
    const id = decoded.UserId;
    const user = await User.findById(id);
    if (!user) {
      return res.json({ message: "These Action are not Allowed" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
    console.log("Error while verifying token", error.message);
  }
};
