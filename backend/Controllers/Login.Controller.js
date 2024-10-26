import User from "../Models/Login.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validate the input data
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }
    const user = await User.findOne({ email });
    const hashPassword = await bcrypt.hash(password, 8);
    if (user) {
      return res.json({ success: false, message: "Email already exists" });
    }
    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();
    res.json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while registering user", error.message);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ UserId: user._id }, process.env.SECERATE_KEY, {
      expiresIn: "48h",
    });
    res.json({
      success: true,
      message: "logged in successfull",
      user,
      token,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while logging in user", error.message);
  }
};

export const Profile = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "User profile fetched successfully",
      name: req.user.name,
      email: req.user.email,
    });
  } catch (error) {
    res.json({ success: false, error: error.message });
    console.log("Error while fetching user profile", error.message);
  }
};
