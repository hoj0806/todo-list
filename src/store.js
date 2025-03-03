import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./store/rootReducer";

const persisConfig = {
  key: "root",
  storage,
  whitelist: ["todoSlice"],
};

const reducer = persistReducer(persisConfig, rootReducer);

const store = configureStore({
  reducer,
});

export default store;
