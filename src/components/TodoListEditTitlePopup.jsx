import { useDispatch, useSelector } from "react-redux";
import { returnDefault } from "../slice/modeSlice";
import { editTitle } from "../slice/todoSlice";
import { useState } from "react";

function TodoListEditTitlePopup({ selectedId }) {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todoSlice.todoList);
  const findTodoList = todo.find((todo) => todo.id === selectedId);
  const [titleValue, setTitleValue] = useState("");
  const [viewErrorMessage, setViewErrorMessage] = useState(false);

  function onChangeTitle(e) {
    setTitleValue(e.target.value);
    setViewErrorMessage(false);
  }
  function onClickEditTitleButton() {
    if (titleValue.trim() === "") {
      setViewErrorMessage(true);

      return;
    }
    dispatch(editTitle(findTodoList.id, titleValue));
    dispatch(returnDefault());
  }

  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[340px] h-[200px] bg-yellow rounded-xl py-4 text-center flex flex-col mx-auto mt-[280px] desktop:w-[550px] desktop:h-[320px] desktop:mt-[250px] desktop:py-8'>
        <p className='text-xl font-bold grow desktop:text-[36px]'>
          일정 이름 수정
        </p>
        {viewErrorMessage && (
          <div className='text-rose-600 desktop:text-lg'>
            일정 제목을 입력해주세요
          </div>
        )}
        <input
          className='focus:outline-none bg-transparent  mb-8 w-2/3 mx-auto border-b-2 px-1 desktop:mt-5 desktop:text-lg'
          onChange={onChangeTitle}
          maxLength={12}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClickEditTitleButton();
            }
          }}
        />

        <div className='flex justify-center gap-6 desktop:mt-5 desktop:gap-14'>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px] hover:bg-black rounded-md hover:text-white'
            onClick={() => onClickEditTitleButton(selectedId)}
          >
            확인
          </button>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px] hover:bg-black rounded-md hover:text-white'
            onClick={() => dispatch(returnDefault())}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoListEditTitlePopup;
