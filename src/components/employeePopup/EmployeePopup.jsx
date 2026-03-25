import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../store/features/popup/popupSlice";
import { useEffect, useState } from "react";
import { postEmployees, updateEmployees } from "../../store/features/employee/employeeThunk";
const EmployeePopup = () => {
  const popup = useSelector((state) => state.popup.employeePopup);
  const [formDetails, setFormDetails] = useState({
    profileUrl: "",
    name: "",
    bio: "",
    email: "",
    highlight: false,
  });
  
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    if(popup.id){
      await dispatch(updateEmployees({
        id : popup.id,
        details : formDetails,
      }))
    }else{
       await dispatch(postEmployees(formDetails));
    dispatch(closeEmployeePopup());
    }
   
  };
 
  useEffect(()=>{
    if(!popup){
      setFormDetails({
          profileUrl: "",
    name: "",
    bio: "",
    email: "",
    highlight: false,
      })
    }
    else if(popup.id){
      console.log(' set kar rha h')
      setFormDetails({
        profileUrl: popup.profileUrl,
    name: popup.name,
    bio: popup.bio,
    email: popup.email,
    highlight: false,
      })
    }
  },[popup])




  if (!popup) {
    return null;
  }
  return (
    <div
      onClick={() => {
        dispatch(closeEmployeePopup());
      }}
      className="fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex justify-center items-center"
    >
      <fieldset
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Employee Details</legend>

        <label className="label">Profile URL</label>
        <input
        value={formDetails.profileUrl} 
          onChange={handleInputChange}
          name="profileUrl"
          type="text"
          className="input"
          placeholder="Profile URL"
        />

        <label className="label">Name</label>
        <input
        value={formDetails.name} 
          onChange={handleInputChange}
          name="name"
          type="text"
          className="input"
          placeholder="Name"
        />

        <label className="label">Email</label>
        <input
        value={formDetails.email} 
          onChange={handleInputChange}
          name="email"
          type="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Description</label>
        <textarea
        value={formDetails.bio} 
          onChange={handleInputChange}
          name="bio"
          className="textarea h-24"
          placeholder="Bio"
        ></textarea>

        <button onClick={handleSubmit} className="btn btn-neutral mt-4">
          Submit
        </button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
