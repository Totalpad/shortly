import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  originalUrl: "https://github.com/Totalpad",
  shortUrl: "https://is.gd/zNYio0",

};

export const shortSlice = createSlice({
  name: "shortLink",
  initialState,
  reducers: {
    setOriginalUrl: (state, action) => {
      state.originalUrl = action.payload;
    },
    setShortUrl: (state, action) => {
      state.shortUrl = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setOriginalUrl, setShortUrl, setLoading } = shortSlice.actions;
export default shortSlice.reducer;
