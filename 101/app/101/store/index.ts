import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // 다른 리듀서들도 여기에 추가할 수 있습니다
  },
});
