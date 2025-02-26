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
      <div className='w-[320px] h-[180px] bg-yellow rounded-xl py-4 text-center flex flex-col mx-auto mt-[280px] desktop:w-[500px] desktop:h-[280px] desktop:mt-[200px] desktop:py-8'>
        <input
          className='mb-9 text-center'
          onChange={onChangeTitle}
          maxLength={12}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClickEditTitleButton();
            }
          }}
        />
        <p className='text-sm grow desktop:text-[24px]'>
          일정을 수정 하겠습니까?
        </p>
        {viewErrorMessage && (
          <div className='text-rose-500'>일정 제목을 입력해주세요</div>
        )}
        <div className='flex justify-center gap-6'>
          <button
            className='w-[76px] h-6 bg-white-10 text-sm desktop:w-[120px] desktop:h-[35px] desktop:text-[20px]'
            onClick={() => onClickEditTitleButton(selectedId)}
          >
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
