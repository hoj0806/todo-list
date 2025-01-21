import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";
function TodoList({ setSelectIndex }) {
  const todoList = useSelector((state) => state.todoSlice);

  return (
    <ul className='pl-3 pr-4 py-7 flex flex-col gap-2 grow overflow-auto desktop:border-t-[1px] desktop:pl-6 desktop:gap-7'>
      {todoList.map((todo, index) => (
        <TodoListItem
          todo={todo}
          index={index}
          setSelectIndex={setSelectIndex}
        />
      ))}
    </ul>
  );
}

export default TodoList;
