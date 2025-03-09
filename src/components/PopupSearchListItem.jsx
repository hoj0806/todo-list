import { useDispatch } from "react-redux";
import { modifyMode } from "../slice/modeSlice";

function PopupSearchListItem({ todo, setSelectedId }) {
  const dispatch = useDispatch();
  function onClickPopupList() {
    setSelectedId(todo.id);
    dispatch(modifyMode("listDetail"));
  }
  return (
    <li
      className='w-[500px] h-[60px] bg-white-20 rounded-2xl mx-auto mb-3 text-left px-3 flex items-center cursor-pointer hover:bg-orange min-w-0'
      onClick={onClickPopupList}
    >
      <p className='text-xl'>{todo.title}</p>
    </li>
  );
}

export default PopupSearchListItem;
