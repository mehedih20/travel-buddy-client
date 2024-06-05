import { baseApi } from "@/redux/api/baseApi";

const destinationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDestination: builder.mutation({
      query: (data) => ({
        url: "/destination",
        method: "POST",
        body: data,
      }),
    }),
    getDestinations: builder.query({
      query: () => ({
        url: "/destinations",
        method: "GET",
      }),
    }),
    deleteDestination: builder.mutation({
      query: (destinationId) => ({
        url: `/destination/${destinationId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateDestinationMutation,
  useGetDestinationsQuery,
  useDeleteDestinationMutation,
} = destinationsApi;
