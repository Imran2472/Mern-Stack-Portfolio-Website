import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/About/About";
import AboutServices from "./Components/About/AboutServices";
import AddSkill from "./Components/About/AddSkill";
import UpdateSkill from "./Components/About/UpdateSkill";
import Services from "./Components/Services/Services";
import AddServices from "./Components/Services/AddServices";
import UpdateServices from "./Components/Services/UpdateServices";
import AllProject from "./Components/Project/AllProject";
import AddProject from "./Components/Project/AddProject";
import UpdateProject from "./Components/Project/UpdateProject";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/about-skill" element={<AboutServices />} />
        <Route path="/add-skill" element={<AddSkill />} />
        <Route path="/update-skill/:id" element={<UpdateSkill />} />
        <Route path="/services" element={<Services />} />
        <Route path="/add-services" element={<AddServices />} />
        <Route path="/update-services/:id" element={<UpdateServices />} />
        <Route path="/all-project" element={<AllProject />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/update-project/:id" element={<UpdateProject />} />
        <Route path="/conact-details" element={<Contact />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
