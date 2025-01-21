import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { title: "밥먹기", checked: false, date: "2024/01/01", hashtags: [] },
  { title: "밥먹기", checked: false, date: "2024/01/01", hashtags: [] },
  { title: "밥먹기", checked: false, date: "2024/01/01", hashtags: [] },
];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addList: (state) => {
      state.push({
        title: "test",
        checked: false,
        date: "2024/01/01",
      });
    },
  },
});

export default todoSlice;
export const { addList } = todoSlice.actions;
