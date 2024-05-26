"use client";
import logo from "@/assets/Homepage/travel-logo.png";
import { getUserInfo } from "@/services/auth.services";
import { userPayload } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";

const userMenu = [
  {
    name: "Profile",
    route: "/profile",
  },
  {
    name: "Change Password",
    route: "/change-password",
  },
  {
    name: "Travel Requests",
    route: "/travel-requests",
  },
  {
    name: "Travel Posts",
    route: "/travel-posts",
  },
];

const adminMenu = [
  {
    name: "Profile",
    route: "/profile",
  },
  {
    name: "Change Password",
    route: "/change-password",
  },
];

const ProfileDrawer = ({ children }: { children: React.ReactNode }) => {
  const userInfo = getUserInfo() as userPayload;
  const router = useRouter();
  const requiredMenu = userInfo?.role === "user" ? userMenu : adminMenu;

  if (!userInfo?.role) {
    router.push("/");
    return;
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="flex justify-between lg:justify-end items-center py-4 px-6 bg-purple-900 shadow-xl">
          <label htmlFor="my-drawer" className="drawer-button lg:hidden mr-4">
            <FiMenu className="text-3xl text-white" />
          </label>
          <button className="btn bg-red-600 border-none text-white font-montserrat text-base">
            Logout
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu w-80 p-0">
          <div className="flex items-center bg-purple-800 pl-6 h-[80px]">
            <Image src={logo} alt="logo" width={70} height={70} />
            <span className="text-2xl text-white font-pacifico">
              Travel <span className="text-yellow-500">Buddy</span>
            </span>
          </div>
          <ul className=" p-4 min-h-screen lg:min-h-screen-minus-logo bg-purple-800 text-white font-montserrat">
            {userInfo?.role &&
              requiredMenu.map(({ name, route }) => (
                <li
                  key={name}
                  className="mb-3 py-2 rounded-lg font-montserrat font-bold bg-violet-500 text-base"
                >
                  <Link href={route}>{name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDrawer;
