import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers/layout";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    auth: authReducer
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV === "development",
});

export default store;
