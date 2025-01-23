import { useDispatch, useSelector } from "react-redux";
import { returnDefault } from "../slice/modeSlice";

function TodoListEditTitlePopup({ selectIndex }) {
  const todo = useSelector((state) => state.todoSlice);
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[320px] h-[180px] bg-yellow rounded-xl py-4 text-center flex flex-col mx-auto mt-[280px] desktop:w-[500px] desktop:h-[280px] desktop:mt-[200px] desktop:py-8'>
        <input value={todo[selectIndex].title} className='mb-9 text-center' />
        <p className='text-sm grow desktop:text-[24px]'>
          일정을 수정 하겠습니까?
        </p>
        <div className='flex justify-center gap-6'>
          <button className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px]'>
            네
          </button>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px]'
            onClick={() => dispatch(returnDefault())}
          >
            아니요
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoListEditTitlePopup;
