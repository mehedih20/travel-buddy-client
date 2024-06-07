"use client";
import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogout = () => {
    logoutUser(router);
  };

  return (
    <>
      {!userInfo ? (
        <Link
          href="/login"
          className="bg-purple-800 py-3 rounded-full px-5 text-white font-bold hover:bg-teal-950 transition-all duration-300 ease-in-out"
        >
          Login
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          className="bg-red-500 py-3 rounded-full px-5 text-white font-bold hover:bg-teal-950 transition-all duration-300 ease-in-out"
        >
          Logout
        </button>
      )}
    </>
  );
};

export default AuthButton;
