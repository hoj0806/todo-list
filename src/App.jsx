import AddButton from "./components/AddButton";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Wrapper from "./layout/Wrapper";
import TodoList from "./components/TodoList";
import AppLayout from "./layout/AppLayout";
import MobileFeatureLayout from "./layout/MobileFeatureLayout";
import TodoListSearchPopup from "./components/TodoListSearchPopup";
import TodoDetailPopup from "./components/TodoDetailPopup";
import TodoListAddPopup from "./components/TodoListAddPopup";
import TodoListDeletePopup from "./components/TodoListDeletePopup";
import TodoListEditTitlePopup from "./components/TodoListEditTitlePopup";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setSearchTerm } from "./slice/todoSlice";
import ClearAllListPopup from "./components/ClearAllListPopup";
import { useMediaQuery } from "react-responsive";

function App() {
  const mode = useSelector((state) => state.modeSlice);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const [inputValue, setInputValue] = useState("");

  function onChangeSearchValue(e) {
    setInputValue(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  }

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    if (isDesktop) {
      dispatch(setSearchTerm(""));
      setInputValue("");
    }
  }, [isDesktop, dispatch]);

  return (
    <Wrapper>
      <AppLayout>
        <Header />
        <MobileFeatureLayout>
          <SearchBar
            onChangeSearchValue={onChangeSearchValue}
            inputValue={inputValue}
          />
          <AddButton />
        </MobileFeatureLayout>
        <TodoList setSelectedId={setSelectedId} />
      </AppLayout>
      {mode.mode === "add" ? <TodoListAddPopup /> : null}
      {mode.mode === "delete" ? (
        <TodoListDeletePopup selectedId={selectedId} />
      ) : null}
      {mode.mode === "edit" ? (
        <TodoListEditTitlePopup selectedId={selectedId} />
      ) : null}
      {mode.mode === "listDetail" ? (
        <TodoDetailPopup selectedId={selectedId} />
      ) : null}

      {mode.mode === "listSearch" ? (
        <TodoListSearchPopup setSelectedId={setSelectedId} />
      ) : null}
      {mode.mode === "clearAll" ? <ClearAllListPopup /> : null}
    </Wrapper>
  );
}

export default App;
