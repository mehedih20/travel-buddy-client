import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: "/profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    updateUserPhoto: builder.mutation({
      query: (data) => ({
        url: "/profile/change-photo",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    updateUserPassword: builder.mutation({
      query: (data) => ({
        url: "/change-password",
        method: "PUT",
        body: data,
      }),
    }),
    checkUserPassword: builder.mutation({
      query: (data) => ({
        url: "/check-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUpdateUserPhotoMutation,
  useUpdateUserPasswordMutation,
  useCheckUserPasswordMutation,
} = userApi;
