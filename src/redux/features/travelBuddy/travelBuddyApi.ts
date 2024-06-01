import { baseApi } from "@/redux/api/baseApi";

const tripsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendTravelBuddyRequest: builder.mutation({
      query: (data) => ({
        url: "/trip/request",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendTravelBuddyRequestMutation } = tripsApi;
