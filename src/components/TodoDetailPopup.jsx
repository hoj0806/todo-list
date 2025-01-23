import { useDispatch, useSelector } from "react-redux";
import DeleteHashTagIcon from "../assets/icon/deleteHasgTag.svg";
import { returnDefault } from "../slice/modeSlice";
import { useState } from "react";
import { editMemo } from "../slice/todoSlice";

function TodoDetailPopup({ selectedId }) {
  const todoList = useSelector((state) => state.todoSlice.todoList);
  const findList = todoList.find((todo) => todo.id === selectedId);
  const dispatch = useDispatch();

  const [memoContent, setMemoContent] = useState("");

  function onChangeMemo(e) {
    setMemoContent(e.target.value);
  }
  function onClickMemoButton(memo) {
    dispatch(editMemo(selectedId, memo));
  }
  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[320px] h-[360px] bg-yellow rounded-xl pt-4 pb-2 px-[15px] text-center flex flex-col mx-auto mt-[120px] gap-3 desktop:w-[800px] desktop:h-[600px] desktop:mt-[60px] desktop:pt-[34px] desktop:px-[40px] desktop:pb-[30px]'>
        <p className='text-xl font-bold desktop:text-[48px]'>
          {findList.title}
        </p>

        <div className='text-right grow'>
          <p className='text-[12px] mb-1 desktop:text-[20px] desktop:mb-2'>
            2025.01.01
          </p>
          <textarea
            className='bg-green w-full h-[200px] text-left rounded-[8px] desktop:h-[350px]'
            defaultValue={findList.memo}
            onChange={onChangeMemo}
          />
          <button onClick={() => onClickMemoButton(memoContent)}>
            메모 수정
          </button>
          <div className='w-12 h-4 text-[8px] bg-black text-white rounded-[8px] flex items-center px-1 gap-1 desktop:w-[100px] desktop:h-[32px] desktop:rounded-3xl desktop:px-2 desktop:gap-2'>
            <img
              src={DeleteHashTagIcon}
              className='w-2 h-2 desktop:w-4 desktop:h-4'
            />
            <p className='desktop:text-[14px]'>해시태그</p>
          </div>
        </div>

        <button
          className='bg-white-10 text-sm w-[76px] rounded-[4px] self-end desktop:w-[100px] h-[40px]'
          onClick={() => dispatch(returnDefault())}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default TodoDetailPopup;
