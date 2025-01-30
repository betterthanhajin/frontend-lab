import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    // 다른 리듀서들도 여기에 추가할 수 있습니다
  },
});

export type RootState = ReturnType<typeof store.getState>;
