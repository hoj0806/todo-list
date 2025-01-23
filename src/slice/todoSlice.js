import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { title: "밥먹기", checked: false, date: "2024/01/01", hashtags: [], id: 1 },
  { title: "씻기", checked: true, date: "2024/02/01", hashtags: [], id: 2 },
  {
    title: "공부하기",
    checked: false,
    date: "2024/03/01",
    hashtags: [],
    id: 3,
  },
];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.push({
        title: action.payload,
        checked: false,
        date: "2024/01/01",
        hasgtags: [],
        id: Date.now(),
      });
    },
    checkList: (state, action) => {
      state[action.payload].checked = !state[action.payload].checked;
    },
    deleteList: (state, action) => {
      state.splice(action.payload, 1);
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
        const todo = state.find((todo) => todo.id === action.payload.id);
        todo.title = action.payload.title;
      },
    },
  },
});

export default todoSlice;
export const { addList, checkList, deleteList, editTitle } = todoSlice.actions;
