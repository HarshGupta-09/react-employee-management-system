
import { useDispatch, useSelector } from 'react-redux';
import { closeEmployeePopup } from '../../store/features/popup/popupSlice';
const EmployeePopup = () => {
    const popup = useSelector(state => state.popup.employeePopup)
    const dispatch = useDispatch();
    if(!popup){
return null ;
    }
  return (
    <div onClick={()=>{
        dispatch(closeEmployeePopup())
    }} className='fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex justify-center items-center'>
      <fieldset onClick={(e)=>{
        e.stopPropagation();
      }}  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Employee Details</legend>

  <label className="label">Profile URL</label>
  <input type="text" className="input" placeholder="Profile URL" />

  <label className="label">Name</label>
  <input type="text" className="input" placeholder="Name" />

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />


  <label className="label">Description</label>
  <textarea className="textarea h-24" placeholder="Bio"></textarea>



  <button className="btn btn-neutral mt-4">Submit</button>
</fieldset>
    </div>
  )
}

export default EmployeePopup
