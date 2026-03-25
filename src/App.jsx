import { useSelector } from "react-redux";
import "./App.css";
import Employees from "./components/Employees";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const state = useSelector(state => state.popup)
  console.log(state)
  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
        <Navbar />
        <div className="flex-1 py-10">
          <Employees/>


        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
