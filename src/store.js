import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice";
import modeSlice from "./slice/modeSlice";

const store = configureStore({
  reducer: {
    todoSlice: todoSlice.reducer,
    modeSlice: modeSlice.reducer,
  },
});

export default store;
