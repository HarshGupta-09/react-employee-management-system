
import { useDispatch, useSelector } from 'react-redux';
import { closeDeletePopup } from '../../store/features/popup/popupSlice';
import { deleteEmployees } from '../../store/features/employee/employeeThunk';
const DeletePopup = () => {
    const popup = useSelector(state => state.popup.deletePopup)
    
    const dispatch = useDispatch();
    const handleDelete = async ()=>{
     await  dispatch(deleteEmployees(popup))
     dispatch(closeDeletePopup())
    }
    if(!popup){
return null ;
    }
  return (
    <div onClick={()=>{
        dispatch(closeDeletePopup())
    }} className='fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex justify-center items-center'>
  <div onClick={(e)=>{
    e.stopPropagation();
  }} className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Delete</h2>
    <p>Do you really want to Delete</p>
    <div className="justify-end card-actions mt-6">
      <button onClick={handleDelete} className="btn btn-primary">Yes</button>
      <button onClick={()=>{
        dispatch(closeDeletePopup())
      }} className="btn btn-primary">No</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default DeletePopup
