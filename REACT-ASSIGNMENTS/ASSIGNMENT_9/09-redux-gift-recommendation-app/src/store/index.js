import { configureStore } from "@reduxjs/toolkit";
import giftReducer from "./reducers/index";

export const store = configureStore({
  reducer: {
    gift: giftReducer,
  },
});
