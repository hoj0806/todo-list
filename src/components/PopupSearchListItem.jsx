import { useDispatch } from "react-redux";
import { modifyMode } from "../slice/modeSlice";
import { setPopupSearchTerm } from "../slice/todoSlice";

function PopupSearchListItem({ todo, setSelectedId }) {
  const dispatch = useDispatch();
  function onClickPopupList() {
    setSelectedId(todo.id);
    dispatch(modifyMode("listDetail"));
    dispatch(setPopupSearchTerm(""));
  }
  return (
    <li
      className='dark:bg-black w-[500px] h-[60px] bg-white-20 rounded-2xl mx-auto mb-3 text-left px-3 flex items-center cursor-pointer hover:bg-orange min-w-0'
      onClick={onClickPopupList}
    >
      <p className='text-xl dark:text-white'>{todo.title}</p>
    </li>
  );
}

export default PopupSearchListItem;
