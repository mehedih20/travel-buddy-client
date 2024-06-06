const dashboardAndProfileRoute = [
  {
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    name: "My Profile",
    route: "/dashboard/profile",
  },
];

const changePasswordRoute = {
  name: "Change Password",
  route: "/dashboard/change-password",
};

export const userRoutes = [
  ...dashboardAndProfileRoute,
  {
    name: "Trip Post",
    route: "/trip-post",
  },
  {
    name: "Travel Posts",
    route: "/dashboard/user/travel-posts",
  },
  {
    name: "Travel Requests",
    route: "/dashboard/user/travel-requests",
  },

  changePasswordRoute,
];

export const adminRoutes = [
  ...dashboardAndProfileRoute,
  {
    name: "Manage Trips",
    route: "/dashboard/admin/manage-trips",
  },
  {
    name: "Manage Users",
    route: "/dashboard/admin/manage-users",
  },
  {
    name: "Approve Request",
    route: "/dashboard/admin/approve-request",
  },
  {
    name: "Manage Destination",
    route: "/dashboard/admin/manage-destination",
  },
  changePasswordRoute,
];

export const superAdminRoutes = [
  ...dashboardAndProfileRoute,
  {
    name: "Manage Admin",
    route: "/dashboard/super-admin/manage-admin",
  },
  changePasswordRoute,
];
