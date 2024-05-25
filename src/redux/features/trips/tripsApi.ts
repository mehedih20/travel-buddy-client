import { baseApi } from "@/redux/api/baseApi";

const tripsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTrip: builder.mutation({
      query: (data) => ({
        url: "/api/trips",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateTripMutation } = tripsApi;
