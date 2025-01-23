import AddButton from "./components/AddButton";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Wrapper from "./layout/Wrapper";
import TodoList from "./components/TodoList";
import AppLayout from "./layout/AppLayout";
import MobileFeatureLayout from "./layout/MobileFeatureLayout";

import TodoListItemPopup from "./components/TodoListDeletePopup";
import TodoListSearchPopup from "./components/TodoListSearchPopup";
import { useSelector } from "react-redux";
import AddTodoList from "./components/AddTodoList";
import TodoListDeletePopup from "./components/TodoListDeletePopup";
import { useState } from "react";
import TodoListEditTitlePopup from "./components/TodoListEditTitlePopup";

function App() {
  const mode = useSelector((state) => state.modeSlice);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <Wrapper>
      <AppLayout>
        <Header />
        <MobileFeatureLayout>
          <SearchBar />
          <AddButton />
        </MobileFeatureLayout>
        <TodoList setSelectedId={setSelectedId} />
      </AppLayout>
      {mode.mode === "add" ? <AddTodoList /> : null}
      {mode.mode === "delete" ? (
        <TodoListDeletePopup selectedId={selectedId} />
      ) : null}
      {mode.mode === "edit" ? (
        <TodoListEditTitlePopup selectedId={selectedId} />
      ) : null}
      {/* <TodoDetailPopup /> */}
      {/* <TodoListSearchPopup /> */}
    </Wrapper>
  );
}

export default App;
