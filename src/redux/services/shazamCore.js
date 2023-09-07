import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://academics.newtonschool.co/api/v1",
    prepareHeaders: (headers) => {
      headers.set("projectId", "c4oeb3ucmlyq");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/music/song" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
