import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  originalUrl: "",
  shortUrl: "",
  error: "",
};

export const shortSlice = createSlice({
  name: "shortLink",
  initialState,
  reducers: {
    getShortLink: (state, action) => {
      state.originalUrl = action.payload;
    },
  },
});

export const { getShortLink } = shortSlice.actions;
export default shortSlice.reducer;
