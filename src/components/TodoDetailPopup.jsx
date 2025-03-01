import { useDispatch, useSelector } from "react-redux";
import { returnDefault } from "../slice/modeSlice";
import { useState } from "react";
import { addHasgtag, editMemo } from "../slice/todoSlice";
import Popuphashtag from "./Popuphashtag";

function TodoDetailPopup({ selectedId }) {
  const todoList = useSelector((state) => state.todoSlice.todoList);
  const findList = todoList.find((todo) => todo.id === selectedId);
  const dispatch = useDispatch();

  const [memoContent, setMemoContent] = useState(findList.memo);
  const [hashtagInputValue, setTagInputValue] = useState("");
  const hashTags = findList.hashtags;

  function onChangeMemo(e) {
    setMemoContent(e.target.value);
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      dispatch(addHasgtag(selectedId, hashtagInputValue));
      setTagInputValue("");
    }
  }

  function onChangeHasgTagInput(e) {
    setTagInputValue(e.target.value);
  }

  function onClickMemoSubmitButton() {
    dispatch(editMemo(selectedId, memoContent));
    dispatch(returnDefault());
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
          <input
            onKeyDown={onKeyDown}
            onChange={onChangeHasgTagInput}
            value={hashtagInputValue}
          />

          {hashTags.length !== 0 ? (
            <div className='flex gap-1'>
              {hashTags.map((tag, index) => (
                <Popuphashtag
                  key={index}
                  tag={tag}
                  index={index}
                  selectedId={selectedId}
                />
              ))}
            </div>
          ) : (
            <p>해시태그를 추가해보세요</p>
          )}
        </div>

        <button
          className='bg-white-10 text-sm w-[76px] rounded-[4px] self-end desktop:w-[100px] h-[40px]'
          onClick={onClickMemoSubmitButton}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default TodoDetailPopup;
