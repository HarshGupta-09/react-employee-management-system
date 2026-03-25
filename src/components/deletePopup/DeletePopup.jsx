
import { useDispatch, useSelector } from 'react-redux';
import { closeEmployeePopup } from '../../store/features/popup/popupSlice';
const DeletePopup = () => {
    const popup = useSelector(state => state.popup.deletePopup)
    const dispatch = useDispatch();
    if(!popup){
return null ;
    }
  return (
    <div onClick={()=>{
        dispatch(closeEmployeePopup())
    }} className='fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex justify-center items-center'>
  <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Delete</h2>
    <p>Do you really want to Delete</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Delete Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default DeletePopup
