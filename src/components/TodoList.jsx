import NoSearchData from "./NoSearchData";
import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";

function TodoList({ setSelectedId }) {
  const todoList = useSelector((state) => state.todoSlice.todoList);
  const searchTerm = (
    useSelector((state) => state.todoSlice.searchTerm) || ""
  ).toLowerCase();

  const filteredList = searchTerm
    ? todoList.filter((todo) => {
        const titleMatch = todo.title.toLowerCase().includes(searchTerm);
        const hashtagMatch = todo.hashtags?.some((hashtag) =>
          hashtag.toLowerCase().includes(searchTerm)
        );
        return titleMatch || hashtagMatch;
      })
    : todoList;

  if (todoList.length === 0)
    return <div>할 일 목록이 없습니다 일정을 추가 해보세요!</div>;

  if (filteredList.length === 0) return <NoSearchData />;
  return (
    <>
      <ul className='pl-3 pr-4 py-7 flex flex-col gap-2 flex-grow overflow-auto desktop:border-t-[1px] desktop:pl-6 desktop:gap-7 tablet:grid tablet:grid-cols-2 desktop:flex'>
        {filteredList.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            setSelectedId={setSelectedId}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
