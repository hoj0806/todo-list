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
    dispatch(modifyMode("listDetail"));
  }

  return (
    <div onClick={() => setSelectedId(id)} className='cursor-pointer'>
      <li className='bg-orange dark:bg-black h-[58px] rounded-2xl px-3 flex items-center desktop:h-[120px] desktop:px-[34px] hover:bg-orange2 '>
        <button onClick={() => checkTodoList()}>
          <img
            src={checked ? CheckedIcon : NotCheckedIcon}
            className={`mr-4 desktop:h-[58px] desktop:w-[58px] desktop:mr-6`}
          />
        </button>
        <div
          className={`relative font-bold text-xl grow desktop:text-[48px] ${
            checked && "line-through"
          }`}
          onClick={onClickListTitle}
        >
          <p className='dark:text-white'>{title}</p>
          <div className='absolute top-6 flex gap-2'>
            {hashtags.map((tag, index) => (
              <TodoListHashtag key={index} tag={tag} />
            ))}
          </div>
        </div>

        <div className='flex gap-3 desktop:gap-6'>
          <button
            className='desktop:w-[132px] desktop:h-[72px] desktop:bg-green desktop:rounded-xl hover:bg-green2'
            onClick={onClickEditButton}
          >
            <img
              src={editIcon}
              className='desktop:mx-auto desktop:w-[50px] desktop:h-[50px]'
            />
          </button>
          <button
            className='desktop:w-[132px] desktop:h-[72px] desktop:bg-red desktop:rounded-xl hover:bg-red2'
            onClick={onClickDeleteButton}
          >
            <img
              src={deleteIcon}
              className='desktop:mx-auto desktop:w-[50px] desktop:h-[50px]'
            />
          </button>
        </div>
      </li>
    </div>
  );
}

export default TodoListItem;
