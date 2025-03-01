import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const darkModeSlice = createSlice({
  name: "darkModeSlice",
  initialState,
  reducers: {
    lightMode: (state) => {
      state.isDark = false;
      document.documentElement.classList.remove("dark");
    },
    darkMode: (state) => {
      state.isDark = true;
      document.documentElement.classList.add("dark");
    },
  },
});

export default darkModeSlice;

export const { lightMode, darkMode } = darkModeSlice.actions;
