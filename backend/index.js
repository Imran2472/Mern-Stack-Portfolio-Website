import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import DbConnection from "./config/DbConnect.js";
import HomeRouter from "./Routes/Home.Route.js";
import AboutRouter from "./Routes/About.Route.js";
import SkillRoute from "./Routes/Skill.Route.js";
import ServicesRoute from "./Routes/Services.Route.js";
import ProjectsRoute from "./Routes/Project.Route.js";
import ContactRoute from "./Routes/ContactRoute.js";
import LoginRoute from "./Routes/Login.Route.js";

const app = express();
app.use(json());
dotenv.config();
DbConnection();
app.use(
  cors({
    origin: [
      "https://codewithimran.netlify.app",
      "https://admin-c-penal.netlify.app",
<<<<<<< HEAD
      // "http://localhost:5173",
      // "http://localhost:5174",
=======
      "https://mern-stack-portfolio-website-taupe.vercel.app",
>>>>>>> 15c6b9dc77d374b9a2b85f37b1ba7c9dbeeeb51c
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// routes
app.use("/api/home", HomeRouter);
app.use("/api/about", AboutRouter);
app.use("/api/skill", SkillRoute);
app.use("/api/services", ServicesRoute);
app.use("/api/project", ProjectsRoute);
app.use("/api/contact", ContactRoute);
app.use("/api/user", LoginRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
