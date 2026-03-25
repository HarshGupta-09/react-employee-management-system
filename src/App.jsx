import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Employees from "./components/Employees";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import EmployeePopup from "./components/employeePopup/EmployeePopup";
import DeletePopup from "./components/deletePopup/DeletePopup";
import { getEmployees } from "./store/features/employee/employeeThunk";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getEmployees())
},[])

  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
           <EmployeePopup/> 
           <DeletePopup/>
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
