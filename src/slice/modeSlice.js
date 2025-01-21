import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "default" };

const modeSlice = createSlice({
  name: "modeSlice",
  initialState,
  reducers: {
    modifyMode: (state, action) => {
      state.mode = action.payload;
    },
    returnDefault: (state) => {
      state.mode = "default";
    },
  },
});

export default modeSlice;
export const { modifyMode, returnDefault } = modeSlice.actions;
