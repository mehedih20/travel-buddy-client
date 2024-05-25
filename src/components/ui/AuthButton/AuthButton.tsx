"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogout = () => {
    removeUser();
    router.refresh();
  };

  return (
    <>
      {!userInfo ? (
        <Link
          href="/login"
          className="btn bg-violet-700 hover:bg-violet-900 px-5 text-white font-bold"
        >
          Login
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          className="btn bg-red-600 px-5 text-white font-bold hover:bg-red-950"
        >
          Logout
        </button>
      )}
    </>
  );
};

export default AuthButton;
