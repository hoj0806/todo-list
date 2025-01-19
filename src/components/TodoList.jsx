import TodoListItem from "./TodoListItem";

function TodoList() {
  return (
    <ul className='pl-3 pr-4 py-7 flex flex-col gap-2 grow overflow-auto desktop:border-t-[1px] desktop:pl-6 desktop:gap-7'>
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
