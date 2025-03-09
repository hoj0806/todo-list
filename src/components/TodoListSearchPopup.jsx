import SearchItem from "./PopupSearchListItem";
import CancelIcon from "../assets/icon/cancel.svg";

import { useDispatch, useSelector } from "react-redux";
import { setPopupSearchTerm } from "../slice/todoSlice";
import { modifyMode } from "../slice/modeSlice";
import PopupSearchListItem from "./PopupSearchListItem";

function TodoListSearchPopup({ setSelectedId }) {
  const dispatch = useDispatch();
  const popupSearchTerm = useSelector(
    (state) => state.todoSlice.popupSearhTerm
  );
  const todoList = useSelector((state) => state.todoSlice.todoList);

  const filteredList = popupSearchTerm
    ? todoList.filter((todo) => {
        const titleMatch = todo.title.toLowerCase().includes(popupSearchTerm);
        const hashtagMatch = todo.hashtags?.some((hashtag) =>
          hashtag.toLowerCase().includes(popupSearchTerm)
        );
        return titleMatch || hashtagMatch;
      })
    : todoList;

  function onChangeInput(e) {
    dispatch(setPopupSearchTerm(e.target.value));
  }

  function onClickSearchPopup() {
    dispatch(modifyMode("default"));
    dispatch(setPopupSearchTerm(""));
  }

  return (
    <div className='hidden desktop:block absolute top-0 w-full h-full bg-black bg-opacity-50 z-10 '>
      <div className='dark:bg-black-10 w-[320px] h-[360px] bg-yellow rounded-xl pt-4 pb-2 px-[15px] text-center flex flex-col mx-auto mt-[220px] gap-3 desktop:w-[800px] desktop:h-[600px] desktop:mt-[120px] desktop:pt-[34px] desktop:px-[40px] desktop:pb-[30px] relative'>
        <p className='text-xl font-bold desktop:text-[48px] mb-[80px] dark:text-white'>
          일정 검색
        </p>
        <button className='absolute right-2 top-2' onClick={onClickSearchPopup}>
          <img src={CancelIcon} className='w-[52px] h-[52px]' />
        </button>
        <input
          className='bg-transparent outline-none border-b-2 w-[420px] mx-auto pl-1 text-[24px] dark:border-white dark:text-white'
          placeholder='일정또는 해시태그로 검색해 보세요'
          onChange={onChangeInput}
        />
        <ul className='w-[550px] h-[400px] bg-green mx-auto overflow-y-auto pt-4 rounded-lg'>
          {filteredList.length === 0 ? (
            <div className='mt-[140px] text-xl'>검색결과가 없습니다</div>
          ) : (
            <>
              {filteredList.map((todo) => (
                <PopupSearchListItem
                  todo={todo}
                  key={todo.id}
                  setSelectedId={setSelectedId}
                />
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoListSearchPopup;
