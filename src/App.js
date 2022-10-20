import Navbar from "./components/Navbar/Navbar";
import Index from "./routes/Index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <Navbar />
      <Index />
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </>
  );
}

export default App;
