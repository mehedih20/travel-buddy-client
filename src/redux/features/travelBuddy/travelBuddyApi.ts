import { baseApi } from "@/redux/api/baseApi";
import { TUpdateBuddyRequest } from "@/types";

const tripsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendTravelBuddyRequest: builder.mutation({
      query: (data) => ({
        url: "/trip/request",
        method: "POST",
        body: data,
      }),
    }),
    getSingleTripTravelBuddies: builder.query({
      query: (tripId) => ({
        url: `travel-buddies/${tripId}`,
        method: "GET",
      }),
    }),
    getUserAllBuddyRequest: builder.query({
      query: () => ({
        url: "/user/buddy-request",
        method: "GET",
      }),
    }),
    checkBuddyRequest: builder.query({
      query: (tripId) => ({
        url: `user/check-request/${tripId}`,
        method: "GET",
      }),
    }),
    updateBuddyRequest: builder.mutation({
      query: (data: TUpdateBuddyRequest) => {
        const { buddyId, ...remainingData } = data;
        return {
          url: `/travel-buddies/${buddyId}/respond`,
          method: "PUT",
          body: remainingData,
        };
      },
    }),
  }),
});

export const {
  useSendTravelBuddyRequestMutation,
  useGetUserAllBuddyRequestQuery,
  useCheckBuddyRequestQuery,
  useUpdateBuddyRequestMutation,
  useGetSingleTripTravelBuddiesQuery,
} = tripsApi;
