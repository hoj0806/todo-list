import AddButton from "./components/AddButton";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TodoDetailPopup from "./components/TodoDetailPopup";
import TodoListItemPopup from "./components/TodoListItemPopup";
import TodoListSearchPopup from "./components/TodoListSearchPopup";
import AppLayout from "./layout/AppLayout";
import TodoList from "./components/TodoList";
function App() {
  return (
    <AppLayout>
      <div className='bg-white-20 max-w-screen-2xl mx-auto flex flex-col h-full'>
        <div>
          <Header />
        </div>

        <div className='h-11 flex border-solid desktop:hidden'>
          <SearchBar />
          <AddButton />
        </div>
        <TodoList />
      </div>
      {/* <TodoListItemPopup /> */}
      {/* <TodoDetailPopup /> */}
      {/* <TodoListSearchPopup /> */}
    </AppLayout>
  );
}

export default App;
