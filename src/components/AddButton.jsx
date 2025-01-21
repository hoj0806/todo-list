import AddIcon from "../assets/icon/add.svg";
import { addList } from "../slice/todoSlice";
import { useDispatch } from "react-redux";

function AddButton() {
  const dispatch = useDispatch();

  return (
    <button className='grow h-11 bg-pink' onClick={() => dispatch(addList())}>
      <img src={AddIcon} className='mx-auto' />
    </button>
  );
}

export default AddButton;
