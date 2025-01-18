import NotCheckedIcon from "../assets/icon/notChecked.svg";
import editIcon from "../assets/icon/edit.svg";
import deleteIcon from "../assets/icon/delete.svg";
function TodoListItem() {
  return (
    <div>
      <li className='bg-orange h-[58px] rounded-2xl px-3 flex items-center'>
        <img src={NotCheckedIcon} className='mr-3' />
        <p className='font-bold text-xl grow'>일정 제목</p>
        <div className='flex gap-3'>
          <img src={editIcon} />
          <img src={deleteIcon} />
        </div>
      </li>
    </div>
  );
}

export default TodoListItem;
