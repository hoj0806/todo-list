import AddButton from "./components/AddButton";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Wrapper from "./layout/Wrapper";
import TodoList from "./components/TodoList";
import AppLayout from "./layout/AppLayout";
import MobileFeatureLayout from "./layout/MobileFeatureLayout";
import TodoDetailPopup from "./components/TodoDetailPopup";
import TodoListItemPopup from "./components/TodoListItemPopup";
import TodoListSearchPopup from "./components/TodoListSearchPopup";
import { useSelector } from "react-redux";
import AddTodoList from "./components/AddTodoList";

function App() {
  const mode = useSelector((state) => state.modeSlice);
  console.log(mode.mode);
  return (
    <Wrapper>
      <AppLayout>
        <Header />
        <MobileFeatureLayout>
          <SearchBar />
          <AddButton />
        </MobileFeatureLayout>
        <TodoList />
      </AppLayout>
      {mode.mode === "add" ? <AddTodoList /> : null}
      {/* <TodoListItemPopup /> */}
      {/* <TodoDetailPopup /> */}
      {/* <TodoListSearchPopup /> */}
    </Wrapper>
  );
}

export default App;
