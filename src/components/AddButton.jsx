import AddIcon from "../assets/icon/add.svg";
import { modifyMode } from "../slice/modeSlice";
import { useDispatch } from "react-redux";

function AddButton() {
  const dispatch = useDispatch();

  return (
    <button
      className='grow h-11 bg-pink'
      onClick={() => dispatch(modifyMode("add"))}
    >
      <img src={AddIcon} className='mx-auto' />
    </button>
  );
}

export default AddButton;
