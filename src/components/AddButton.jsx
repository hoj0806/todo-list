import { useDispatch, useSelector } from "react-redux";
import AddIcon from "../assets/icon/add.svg";
import { addList } from "../slice/todoSlice";

function AddButton() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoSlice);

  return (
    <button className='grow h-11 bg-pink' onClick={() => dispatch(addList())}>
      <img src={AddIcon} className='mx-auto' />
    </button>
  );
}

export default AddButton;
