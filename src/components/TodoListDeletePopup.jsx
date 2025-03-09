import { useDispatch, useSelector } from "react-redux";
import { returnDefault } from "../slice/modeSlice";
import { deleteList } from "../slice/todoSlice";
function TodoListDeletePopup({ selectedId }) {
  const todoList = useSelector((state) => state.todoSlice.todoList);
  const findList = todoList.find((todo) => todo.id === selectedId);
  const dispatch = useDispatch();

  function onClickConfirmedDeleteList() {
    dispatch(deleteList(selectedId));
    dispatch(returnDefault());
  }
  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[340px] h-[200px] bg-yellow rounded-xl py-4 text-center flex flex-col mx-auto mt-[280px] desktop:w-[550px] desktop:h-[320px] desktop:mt-[250px] desktop:py-8'>
        <p className='text-xl font-bold grow desktop:text-[36px]'>
          {findList.title}
        </p>
        <p className='text-md grow desktop:text-[24px]'>
          일정을 삭제 하겠습니까?
        </p>
        <div className='flex justify-center gap-6 desktop:mt-5 desktop:gap-14'>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px] hover:bg-black rounded-md hover:text-white'
            onClick={onClickConfirmedDeleteList}
          >
            네
          </button>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px] hover:bg-black rounded-md hover:text-white'
            onClick={() => dispatch(returnDefault())}
          >
            아니요
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoListDeletePopup;
