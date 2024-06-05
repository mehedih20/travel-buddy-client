import { authKey } from "@/constants/auth-key";
import { getFromLocalStorage } from "@/utils/local-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = "https://travel-buddies-seven.vercel.app/api";
const localUrl = "http://localhost:5000/api";

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
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
  tagTypes: ["user", "users", "trips", "buddies"],
  endpoints: () => ({}),
});
