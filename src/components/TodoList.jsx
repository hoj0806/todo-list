import TodoListItem from "./TodoListItem";

function TodoList() {
  return (
    <ul className='pl-3 pr-4 py-3 flex flex-col gap-2 grow overflow-auto'>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  );
}

export default TodoList;
