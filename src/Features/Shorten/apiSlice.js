import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shortLinkApi = createApi({
  reducerPath: "shortLinkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://is.gd/",
  }),
  endpoints: (builder) => ({
    getShortLink: builder.query({
      query: () =>
        `create.php?format=json&url=https://chat.openai.com/c/ee551b8d-0f85-49bf-bd3d-8fdeb3cc3bfa`,
    }),
  }),
});

export const { useGetShortLinkQuery } = shortLinkApi;


// https://is.gd/create.php?format=json&url=https://chat.openai.com/c/ee551b8d-0f85-49bf-bd3d-8fdeb3cc3bfa
