import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import toast, { Toaster } from "react-hot-toast";
import ProjectReview from "./Components/ProjectReview/ProjectReview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-overview/:id" element={<ProjectReview />} />
      </Routes>
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
