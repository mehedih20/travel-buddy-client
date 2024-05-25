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
    getTrips: builder.query({
      query: (queryObj: Record<string, any>) => {
        let params: Record<string, any> = {};

        Object.entries(queryObj).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params[key] = value;
          }
        });

        return {
          url: "/api/trips",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useCreateTripMutation, useGetTripsQuery } = tripsApi;
