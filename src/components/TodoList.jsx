import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import NoList from "./NoList";
import NoSearchData from "./NoSearchData";
import TodoListItem from "./TodoListItem";
import { useSelector, useDispatch } from "react-redux";
import { dndList } from "../slice/todoSlice";
import { useState, useEffect } from "react";

function TodoList({ setSelectedId }) {
  const dispatch = useDispatch();
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      const width = window.innerWidth;
      setIsMobile(width >= 920 && width <= 1204);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  function handleDragEnd(result) {
    if (!result.destination) return;

    const items = [...filteredList];
    const [movedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, movedItem);

    dispatch(dndList(items));
  }

  if (todoList.length === 0) return <NoList />;
  if (filteredList.length === 0) return <NoSearchData />;

  return (
    // 화면 크기가 920~1204px일 때 드래그 기능을 비활성화
    !isMobile ? (
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='todo-list' key='todo-lst'>
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className='pl-6 pr-6 py-7 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-1 w-full overflow-auto'
            >
              {filteredList.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={String(todo.id)}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <TodoListItem
                        todo={todo}
                        key={todo.id}
                        setSelectedId={setSelectedId}
                        isDragging={snapshot.isDragging}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    ) : (
      <ul className='pl-6 pr-6 py-7 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-1 w-full overflow-auto'>
        {filteredList.map((todo) => (
          <li key={todo.id}>
            <TodoListItem
              todo={todo}
              key={todo.id}
              setSelectedId={setSelectedId}
            />
          </li>
        ))}
      </ul>
    )
  );
}

export default TodoList;
