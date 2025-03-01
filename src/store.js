import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice";
import modeSlice from "./slice/modeSlice";
import darkModeSlice from "./slice/darkModeSlice";

const store = configureStore({
  reducer: {
    todoSlice: todoSlice.reducer,
    modeSlice: modeSlice.reducer,
    darkModeSlice: darkModeSlice.reducer,
  },
});

export default store;
