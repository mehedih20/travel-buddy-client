import { baseApi } from "@/redux/api/baseApi";
import { TUpdateBuddyRequest } from "@/types";

const travelBuddyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendTravelBuddyRequest: builder.mutation({
      query: (data) => ({
        url: "/trip/request",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["buddies"],
    }),
    getSingleTripTravelBuddies: builder.query({
      query: (tripId) => ({
        url: `travel-buddies/${tripId}`,
        method: "GET",
      }),
      providesTags: ["buddies"],
    }),
    getAllBuddyRequest: builder.query({
      query: () => ({
        url: "/buddy-request",
        method: "GET",
      }),
      providesTags: ["buddies"],
    }),
    getUserAllBuddyRequest: builder.query({
      query: () => ({
        url: "/user/buddy-request",
        method: "GET",
      }),
      providesTags: ["buddies"],
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
      invalidatesTags: ["buddies"],
    }),
  }),
});

export const {
  useSendTravelBuddyRequestMutation,
  useGetUserAllBuddyRequestQuery,
  useCheckBuddyRequestQuery,
  useUpdateBuddyRequestMutation,
  useGetSingleTripTravelBuddiesQuery,
  useGetAllBuddyRequestQuery,
} = travelBuddyApi;
