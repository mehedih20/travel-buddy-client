export const userRoutes = [
  {
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    name: "My Profile",
    route: "/dashboard/user/profile",
  },
  {
    name: "Travel Posts",
    route: "/dashboard/user/travel-posts",
  },
  {
    name: "Travel Requests",
    route: "/dashboard/user/travel-requests",
  },
  {
    name: "Change Password",
    route: "/dashboard/user/change-password",
  },
];

export const adminRoutes = [
  {
    name: "Dashboard",
    route: "/dashboard",
  },
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
    name: "Mange Destination",
    route: "/dashboard/admin/manage-destination",
  },
];

export const superAdminRoutes = [
  {
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    name: "Manage Admin",
    route: "dashboard/super-admin/manage-admin",
  },
];
