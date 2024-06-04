export const userRoutes = [
  {
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    name: "My Profile",
    route: "/dashboard/profile",
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
    route: "/dashboard/change-password",
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
    name: "Change Password",
    route: "/dashboard/change-password",
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
