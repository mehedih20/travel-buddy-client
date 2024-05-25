import { authKey } from "@/constants/auth-key";
import { getFromLocalStorage } from "@/utils/local-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  prepareHeaders: (headers) => {
    const token = getFromLocalStorage(authKey);
    if (token) {
      headers.set("Authorization", JSON.parse(token));
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
