import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      title: "밥먹기",
      checked: false,
      date: "2024/01/01",
      hashtags: ["test1", "test2", "test33"],
      id: 1,
      memo: "오늘 점심은 돈까스",
    },
    {
      title: "씻기",
      checked: true,
      date: "2024/02/01",
      hashtags: ["test1", "test2", "test33"],
      id: 2,
      memo: "치실하기",
    },
    {
      title: "공부하기",
      checked: false,
      date: "2024/03/01",
      hashtags: ["test1", "test2", "test33"],
      id: 3,
      memo: "세시간 정도는 하기",
    },
  ],
  searchTerm: "",
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.todoList.push({
        title: action.payload,
        checked: false,
        date: "2024/01/01",
        hashtags: [],
        id: Date.now(),
        memo: "",
      });
    },
    checkList: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      todo.checked = !todo.checked;
    },
    deleteList: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id != action.payload
      );
    },
    editTitle: {
      prepare(id, title) {
        return {
          payload: {
            id,
            title,
          },
        };
      },
      reducer(state, action) {
        const todo = state.todoList.find(
          (todo) => todo.id === action.payload.id
        );
        todo.title = action.payload.title;
      },
    },
    editMemo: {
      prepare(id, memo) {
        return {
          payload: {
            id,
            memo,
          },
        };
      },
      reducer(state, action) {
        const todo = state.todoList.find(
          (todo) => todo.id === action.payload.id
        );
        todo.memo = action.payload.memo;
      },
    },
    deleteHasgtag: {
      prepare(id, hasgtagIndex) {
        return {
          payload: {
            id,
            hasgtagIndex,
          },
        };
      },
      reducer(state, action) {
        const todo = state.todoList.find(
          (todo) => todo.id === action.payload.id
        );
        todo.hashtags.splice(action.payload.hasgtagIndex, 1);
      },
    },
    addHasgtag: {
      prepare(id, hasgTagContent) {
        return {
          payload: {
            id,
            hasgTagContent,
          },
        };
      },
      reducer(state, action) {
        const todo = state.todoList.find(
          (todo) => todo.id === action.payload.id
        );
        const hasgTags = todo.hashtags;
        hasgTags.push(action.payload.hasgTagContent);
      },
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export default todoSlice;
export const {
  addList,
  checkList,
  deleteList,
  editTitle,
  editMemo,
  deleteHasgtag,
  addHasgtag,
  searchList,
  setSearchTerm,
} = todoSlice.actions;
