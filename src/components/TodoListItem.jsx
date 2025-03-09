import NotCheckedIcon from "../assets/icon/notChecked.svg";
import CheckedIcon from "../assets/icon/checked.svg";

import editIcon from "../assets/icon/edit.svg";
import deleteIcon from "../assets/icon/delete.svg";
import { useDispatch } from "react-redux";
import { checkList } from "../slice/todoSlice";
import { modifyMode } from "../slice/modeSlice";
import TodoListHashtag from "./TodoListHashtag";
function TodoListItem({ todo, setSelectedId }) {
  const dispatch = useDispatch();
  const { title, checked, id, hashtags } = todo;

  function checkTodoList() {
    dispatch(checkList(id));
  }

  function onClickDeleteButton() {
    dispatch(modifyMode("delete"));
  }

  function onClickEditButton() {
    dispatch(modifyMode("edit"));
  }

  function onClickListTitle() {
    setSelectedId(id);
    dispatch(modifyMode("listDetail"));
  }

  return (
    <li
      className='bg-orange dark:bg-black h-[58px] rounded-2xl px-3 flex items-center 
                 desktop:h-[120px] desktop:px-[34px] hover:bg-orange2 
                 w-full min-w-0'
    >
      <button onClick={() => checkTodoList()}>
        <img
          src={checked ? CheckedIcon : NotCheckedIcon}
          className='mr-4 desktop:h-[58px] desktop:w-[58px] desktop:mr-6'
        />
      </button>
      <div
        className={`relative font-bold text-xl grow desktop:text-[48px] ${
          checked && "line-through"
        }`}
      >
        <span
          className='dark:text-white hover:underline cursor-pointer'
          onClick={onClickListTitle}
        >
          {title}
        </span>
        <div className='absolute top-6 flex gap-2'>
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
