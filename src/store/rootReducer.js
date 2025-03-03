import { combineReducers } from "redux";
import todoSlice from "../slice/todoSlice";
import modeSlice from "../slice/modeSlice";
import darkModeSlice from "../slice/darkModeSlice";

const rootReducer = combineReducers({
  todoSlice: todoSlice.reducer,
  modeSlice: modeSlice.reducer,
  darkModeSlice: darkModeSlice.reducer,
});

export default rootReducer;
