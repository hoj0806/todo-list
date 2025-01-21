import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { title: "밥먹기", checked: false, date: "2024/01/01", hashtags: [] },
  { title: "씻기", checked: true, date: "2024/02/01", hashtags: [] },
  { title: "공부하기", checked: false, date: "2024/03/01", hashtags: [] },
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
      });
    },
    checkList: (state, action) => {
      state[action.payload].checked = !state[action.payload].checked;
    },
  },
});

export default todoSlice;
export const { addList, checkList } = todoSlice.actions;
