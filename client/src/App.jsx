import HomePage from "./Components/Home/HomePage";
import toast, { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <HomePage />
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
