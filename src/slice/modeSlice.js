import { createSlice } from "@reduxjs/toolkit";

const initialState = "default";

const modeSlice = createSlice({
  name: "modeSlice",
  initialState,
  reducers: {
    modifyMode: (state, action) => {
      state = action.payload;
    },
  },
});

export default modeSlice;
export const { modifyMode } = modeSlice.actions;
