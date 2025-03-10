import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

// todoList만 저장하고 searchTerm과 popupSearhTerm은 제외하는 transform
const todoListTransform = createTransform(
  (inboundState) => {
    return { todoList: inboundState.todoList }; // 저장 시 todoList만 저장
  },
  (outboundState, originalState) => {
    return { ...originalState, ...outboundState }; // 불러올 때 원래 state와 병합
  },
  { whitelist: ["todoSlice"] } // todoSlice에만 적용
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todoSlice"], // todoSlice만 저장
  transforms: [todoListTransform], // todoList만 저장하도록 변환 적용
};

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer,

  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["some.nested.path"],
      },
    });
    return defaultMiddleware;
  },
});

export default store;
