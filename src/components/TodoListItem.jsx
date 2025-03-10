import NotCheckedIcon from "../assets/icon/notChecked.svg";
import CheckedIcon from "../assets/icon/checked.svg";
import editIcon from "../assets/icon/edit.svg";
import deleteIcon from "../assets/icon/delete.svg";
import DarkModeNotCheckedIcon from "../assets/icon/DarkModeNotChecked.svg";
import DarkModeCheckedIcon from "../assets/icon/DarkModeChecked.svg";

import { useDispatch, useSelector } from "react-redux";
import { checkList } from "../slice/todoSlice";
import { modifyMode } from "../slice/modeSlice";
import TodoListHashtag from "./TodoListHashtag";

function TodoListItem({ todo, setSelectedId }) {
  const dispatch = useDispatch();
  const { title, checked, id, hashtags } = todo;
  const isDark = useSelector((state) => state.darkModeSlice.isDark);
  let checkedIconName = isDark ? DarkModeCheckedIcon : CheckedIcon;
  let NotcheckedIconName = isDark ? DarkModeNotCheckedIcon : NotCheckedIcon;

  function checkTodoList() {
    dispatch(checkList(id));
  }

  function onClickDeleteButton() {
    setSelectedId(id);
    dispatch(modifyMode("delete"));
  }

  function onClickEditButton() {
    setSelectedId(id);
    dispatch(modifyMode("edit"));
  }

  function onClickListTitle() {
    setSelectedId(id);
    dispatch(modifyMode("listDetail"));
  }

  return (
    <li
      className='bg-orange h-[70px] rounded-3xl px-3 flex items-center 
                 desktop:h-[120px] desktop:px-[34px] hover:bg-orange2 
                  min-w-0 w-full dark:bg-black-10'
    >
      <button onClick={() => checkTodoList()}>
        <img
          src={checked ? checkedIconName : NotcheckedIconName}
          className='mr-4 desktop:h-[58px] desktop:w-[58px] desktop:mr-6'
        />
      </button>
      <div
        className={`dark:decoration-white relative font-bold text-xl grow desktop:text-[48px] ${
          checked && "line-through"
        }`}
      >
        <span
          className='dark:text-white hover:underline cursor-pointer'
          onClick={onClickListTitle}
        >
          {title}
        </span>
        <div className='absolute top-7 flex gap-1 desktop:top-11 desktop:gap-2'>
          {hashtags.map((tag, index) => (
            <TodoListHashtag key={index} tag={tag} />
          ))}
        </div>
      </div>

      <div className='flex gap-3 desktop:gap-6'>
        <button
          className='w-[50px] h-[30px] desktop:w-[132px] desktop:h-[72px] bg-green rounded-xl hover:bg-green2'
          onClick={onClickEditButton}
        >
          <img
            src={editIcon}
            className='mx-auto desktop:w-[50px] desktop:h-[50px]'
          />
        </button>
        <button
          className='w-[50px] h-[30px] desktop:w-[132px] desktop:h-[72px] bg-red rounded-xl hover:bg-red2'
          onClick={onClickDeleteButton}
        >
          <img
            src={deleteIcon}
            className='mx-auto desktop:w-[50px] desktop:h-[50px]'
          />
        </button>
      </div>
    </li>
  );
}

export default TodoListItem;
