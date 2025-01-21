import NotCheckedIcon from "../assets/icon/notChecked.svg";
import CheckedIcon from "../assets/icon/checked.svg";

import editIcon from "../assets/icon/edit.svg";
import deleteIcon from "../assets/icon/delete.svg";
function TodoListItem({ todo }) {
  const { title, checked } = todo;
  return (
    <div>
      <li className='bg-orange h-[58px] rounded-2xl px-3 flex items-center desktop:h-[120px] desktop:px-[34px]'>
        <button>
          <img
            src={checked ? CheckedIcon : NotCheckedIcon}
            className='mr-3 desktop:h-[58px] desktop:w-[58px] desktop:mr-6'
          />
        </button>
        <p className='font-bold text-xl grow desktop:text-[48px]'>{title}</p>
        <div className='flex gap-3 desktop:gap-6'>
          <button className='desktop:w-[132px] desktop:h-[72px] desktop:bg-green desktop:rounded-xl'>
            <img
              src={editIcon}
              className='desktop:mx-auto desktop:w-[50px] desktop:h-[50px]'
            />
          </button>
          <button className='desktop:w-[132px] desktop:h-[72px] desktop:bg-red desktop:rounded-xl'>
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
