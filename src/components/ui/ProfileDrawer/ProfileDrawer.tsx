"use client";
import logo from "@/assets/Homepage/travel-logo.png";
import {
  adminRoutes,
  superAdminRoutes,
  userRoutes,
} from "@/constants/routesData";
import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import { userPayload } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const ProfileDrawer = ({ children }: { children: React.ReactNode }) => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const userInfo = getUserInfo() as userPayload;
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logoutUser(router);
  };

  const roleBasedRoutes =
    userInfo?.role === "user"
      ? userRoutes
      : userInfo?.role === "admin"
      ? adminRoutes
      : superAdminRoutes;

  const handleOpenSideDrawer = () => {
    setOpenSideDrawer(true);
  };
  const handleCloseSideDrawer = () => {
    setOpenSideDrawer(false);
  };

  return (
    <div className=" fixed left-0 top-0 h-full w-full flex bg-violet-300">
      <div className="hidden bg-violet-950 border-r border-purple-800 lg:flex flex-col pb-5 min-w-[300px]">
        <div className="flex justify-center items-center mt-2">
          <Image src={logo} alt="logo" width={60} height={60} />
          <span className="text-2xl text-white font-pacifico">
            Travel <span className="text-yellow-500">Buddy</span>
          </span>
        </div>
        <div className="flex flex-col flex-1 bg-purple-900/80 mx-5 mt-3 rounded-md py-5">
          {userInfo &&
            roleBasedRoutes.map((item, index) => {
              return (
                <Link
                  className={`${
                    pathname === item.route ? "bg-violet-600" : "bg-violet-950"
                  } py-3 mx-2 mb-3 rounded-lg text-center text-base text-white font-montserrat font-semibold`}
                  href={item.route}
                  key={index}
                >
                  {item.name}
                </Link>
              );
            })}

          <p className="text-gray-400 mt-auto font-semibold text-center text-xs">
            Travel Buddy | Copyright&copy;2024
          </p>
        </div>
      </div>
      <div className="min-h-screen flex-1 pb-2">
        <div className="bg-violet-950 h-[80px] flex-1 flex justify-between items-center px-4">
          <button
            onClick={handleOpenSideDrawer}
            className="lg:hidden p-3 font-semibold text-white  font-montserrat text-xl shadow-xl"
          >
            <FiMenu />
          </button>
          <p className="hidden text-white lg:flex items-center font-montserrat">
            <span className="p-2 bg-purple-500 rounded-full">
              <FaUser />
            </span>
            <span className="ml-2">{userInfo?.name}</span>
          </p>
          <button
            onClick={handleLogout}
            className="py-3 px-6 font-semibold text-white bg-purple-800 font-montserrat text-sm rounded-3xl shadow-xl hover:bg-blue-900 duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
        <div className="px-2 sm:px-8 py-[30px] h-[100vh] overflow-y-scroll flex-1 font-montserrat">
          {children}
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`absolute ${
          openSideDrawer ? "translate-x-0" : "-translate-x-full"
        } left-0 top-0 h-full z-10 bg-violet-950 flex flex-col pb-5 min-w-[350px] rounded-md shadow-xl shadow-teal-500/50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between p-4 items-center">
          <div className="flex justify-center items-center">
            <Image src={logo} alt="logo" width={60} height={60} />
            <span className="text-2xl text-white font-pacifico">
              Travel <span className="text-yellow-500">Buddy</span>
            </span>
          </div>
          <button
            onClick={handleCloseSideDrawer}
            className="text-2xl p-1 text-white rounded-md border-2"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col flex-1 bg-purple-900/80 mx-5 mt-3 rounded-md py-5">
          {userInfo &&
            roleBasedRoutes.map((route, index) => {
              return (
                <Link
                  className="bg-violet-950 py-3 mx-2 mb-3 rounded-lg text-center text-base text-white font-montserrat font-semibold"
                  href={route.route}
                  key={index}
                  onClick={handleCloseSideDrawer}
                >
                  {route.name}
                </Link>
              );
            })}

          <p className="text-gray-400 mt-auto font-semibold text-center text-xs">
            Travel Buddy | Copyright&copy;2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDrawer;
