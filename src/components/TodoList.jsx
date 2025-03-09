import NoList from "./NoList";
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

  if (todoList.length === 0) return <NoList />;

  if (filteredList.length === 0) return <NoSearchData />;
  return (
    <>
      <ul
        className='pl-6 pr-6 py-7 grid gap-4 
               tablet:grid-cols-2 desktop:grid-cols-1 
               w-full overflow-auto'
      >
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
