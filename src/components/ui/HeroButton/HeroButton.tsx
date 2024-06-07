import { getUserInfo } from "@/services/auth.services";
import { userPayload } from "@/types";
import Link from "next/link";

const HeroButton = () => {
  const userInfo = getUserInfo() as userPayload;

  const notRegularUser =
    userInfo?.role === "admin" || userInfo?.role === "super-admin";
  return (
    <Link
      href="/trip-post"
      className={`${
        notRegularUser ? "hidden" : ""
      } btn mt-5 bg-orange-600 shadow-lg border-none text-white hover:text-black animate-pulsate px-10 text-lg font-macondo`}
    >
      Share Your Trip
    </Link>
  );
};

export default HeroButton;
