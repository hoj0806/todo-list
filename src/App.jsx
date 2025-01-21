import AddButton from "./components/AddButton";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TodoDetailPopup from "./components/TodoDetailPopup";
import TodoListItemPopup from "./components/TodoListItemPopup";
import TodoListSearchPopup from "./components/TodoListSearchPopup";
import Wrapper from "./layout/Wrapper";
import TodoList from "./components/TodoList";
import AppLayout from "./layout/AppLayout";
function App() {
  return (
    <Wrapper>
      <AppLayout>
        <div>
          <Header />
        </div>

        <div className='h-11 flex border-solid desktop:hidden'>
          <SearchBar />
          <AddButton />
        </div>
        <TodoList />
      </AppLayout>
      {/* <TodoListItemPopup /> */}
      {/* <TodoDetailPopup /> */}
      {/* <TodoListSearchPopup /> */}
    </Wrapper>
  );
}

export default App;
