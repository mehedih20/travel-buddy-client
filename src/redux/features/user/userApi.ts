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
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["users"],
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
    changeUserRole: builder.mutation({
      query: (userId) => ({
        url: `/change-role/${userId}`,
        method: "PUT",
      }),
      invalidatesTags: ["users"],
    }),
    changeUserStatus: builder.mutation({
      query: (userId) => ({
        url: `/change-status/${userId}`,
        method: "PUT",
      }),
      invalidatesTags: ["users"],
    }),
    checkUserEmailUsername: builder.mutation({
      query: (data) => ({
        url: "/check-email-username",
        method: "POST",
        body: data,
      }),
    }),
    checkUserStatus: builder.mutation({
      query: (data) => ({
        url: "/check-status",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUpdateUserPhotoMutation,
  useUpdateUserPasswordMutation,
  useCheckUserPasswordMutation,
  useChangeUserRoleMutation,
  useChangeUserStatusMutation,
  useCheckUserEmailUsernameMutation,
  useCheckUserStatusMutation,
} = userApi;
