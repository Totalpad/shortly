import { configureStore } from "@reduxjs/toolkit";
import shortReducer from "./Features/Shorten/shortSlice";
// import { shortLinkApi } from "./Features/Shorten/apiSlice";
// import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // [shortLinkApi.reducerPath]: shortLinkApi.reducer,
    short: shortReducer,
  },
  // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(shortLinkApi.middleware),
});

// setupListeners(store.dispatch);
