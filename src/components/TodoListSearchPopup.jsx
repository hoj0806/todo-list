import SearchItem from "./SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { setPopupSearchTerm } from "../slice/todoSlice";

function TodoListSearchPopup() {
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

  return (
    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 z-10'>
      <div className='w-[320px] h-[360px] bg-yellow rounded-xl pt-4 pb-2 px-[15px] text-center flex flex-col mx-auto mt-[220px] gap-3 desktop:w-[800px] desktop:h-[600px] desktop:mt-[60px] desktop:pt-[34px] desktop:px-[40px] desktop:pb-[30px]'>
        <p className='text-xl font-bold desktop:text-[48px] mb-[80px]'>
          일정 검색
        </p>
        <input
          className='bg-yellow outline-none border-b-2 w-[420px] mx-auto pl-1 text-[24px]'
          placeholder='일정을 검색해 보세요'
          onChange={onChangeInput}
        />
        <ul className='w-[550px] h-[400px] bg-orange mx-auto overflow-y-auto pt-4'>
          {filteredList.map((todo) => (
            <SearchItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListSearchPopup;
