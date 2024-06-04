"use client";

import {
  adminRoutes,
  superAdminRoutes,
  userRoutes,
} from "@/constants/routesData";
import { getUserInfo } from "@/services/auth.services";
import { userPayload } from "@/types";
import Link from "next/link";

const DashboardPage = () => {
  const userInfo = getUserInfo() as userPayload;
  const userServices =
    userInfo.role === "user"
      ? userRoutes
      : userInfo.role === "admin"
      ? adminRoutes
      : superAdminRoutes;

  return (
    <div className="px-2 mb-[100px]">
      <h1 className="text-3xl mb-10 text-violet-950">
        Welcome to your dashboard!
      </h1>
      <h2 className=" uppercase text-2xl bg-violet-400 py-5 font-semibold px-4 rounded-md shadow-lg text-violet-95  0">
        Your Services
      </h2>
      <div className="xl:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-5 py-10">
        {userServices.map((item, index) => {
          if (item.name === "Dashboard") {
            return;
          }

          return (
            <div key={index} className="rounded-lg h-[100px] overflow-hidden  ">
              <Link
                className="bg-purple-950 flex justify-center items-center text-gray-300 w-full h-full text-lg font-semibold hover:bg-gray-950 transition-all duration-300 ease-in-out"
                href={item.route}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPage;
