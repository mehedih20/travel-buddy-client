import { baseApi } from "@/redux/api/baseApi";
import { TUpdateTrip } from "@/types";

const tripsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTrip: builder.mutation({
      query: (data) => ({
        url: "/trips",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["trips"],
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
          url: "/trips",
          method: "GET",
          params,
        };
      },
      providesTags: ["trips"],
    }),
    getSingleTrip: builder.query({
      query: (id) => ({
        url: `/trips/${id}`,
        method: "GET",
      }),
      providesTags: ["trips"],
    }),
    getSingleUserTrips: builder.query({
      query: () => ({
        url: "/user/trips",
        method: "GET",
      }),
      providesTags: ["trips"],
    }),
    getTravelTypes: builder.query({
      query: () => ({
        url: "/travel-types",
        method: "GET",
      }),
    }),
    updateTrip: builder.mutation({
      query: (data: TUpdateTrip) => {
        const { tripId, ...remaingData } = data;

        return {
          url: `/update-trip/${tripId}`,
          method: "PUT",
          body: remaingData,
        };
      },
      invalidatesTags: ["trips"],
    }),
    deleteTrip: builder.mutation({
      query: (tripId) => ({
        url: `/delete-trip/${tripId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["trips"],
    }),
  }),
});

export const {
  useCreateTripMutation,
  useGetTripsQuery,
  useGetSingleTripQuery,
  useGetTravelTypesQuery,
  useGetSingleUserTripsQuery,
  useUpdateTripMutation,
  useDeleteTripMutation,
} = tripsApi;
