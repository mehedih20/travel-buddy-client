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
    getSingleTrip: builder.query({
      query: (id) => ({
        url: `/api/trips/${id}`,
        method: "GET",
      }),
    }),
    getTravelTypes: builder.query({
      query: () => ({
        url: "/api/travel-types",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateTripMutation,
  useGetTripsQuery,
  useGetSingleTripQuery,
  useGetTravelTypesQuery,
} = tripsApi;
