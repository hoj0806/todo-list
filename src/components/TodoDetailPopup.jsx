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
    setMemoContent(e.target.value.trim());
  }

  function onKeyDown(e) {
    if (hashTags.length < 5) {
      if (e.key === "Enter") {
        dispatch(addHasgtag(selectedId, hashtagInputValue));
        setTagInputValue("");
      }
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
      <div className='w-[430px] h-[520px] bg-yellow rounded-xl pt-4 pb-4 px-[15px] text-center flex flex-col mx-auto mt-[240px] gap-3 desktop:w-[820px] desktop:h-[660px] desktop:mt-[180px] desktop:pt-[34px] desktop:px-[20px] desktop:pb-[30px] relative'>
        <p className='text-xl font-bold desktop:text-[48px]'>
          {findList.title}
        </p>

        <div className='text-left grow'>
          <div className='flex justify-between'>
            <p className='desktop:text-[20px]'>{memoContent.length} / 300</p>
            <p className='text-[12px] mb-1 desktop:text-[20px] desktop:mb-2'>
              {findList.date}
            </p>
          </div>
          <textarea
            className='bg-green w-full h-[300px] text-left rounded-[8px] desktop:h-[350px] outline-none resize-none p-3 mt-2 mb-2 desktop:text-2xl'
            defaultValue={findList.memo}
            onChange={onChangeMemo}
            maxLength={300}
          />

          {hashTags.length !== 0 ? (
            <div className='flex gap-1 flex-wrap'>
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
            <p className='desktop:text-[20px]'>해시태그를 추가해보세요</p>
          )}
          <input
            onKeyDown={onKeyDown}
            onChange={onChangeHasgTagInput}
            value={hashtagInputValue}
            maxLength={6}
            placeholder='#태그추가'
            className='outline-none bg-transparent border-b-2 px-[0.5px] w-[120px] absolute bottom-[20px] desktop:text-2xl desktop:w-[170px] desktop:px-1 desktop:bottom-[40px]'
          />
        </div>

        <button
          className='bg-white-10 text-sm w-[66px] rounded-[4px] self-end desktop:w-[120px] h-[40px] hover:bg-black hover:text-white desktop:text-xl'
          onClick={onClickMemoSubmitButton}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default TodoDetailPopup;
