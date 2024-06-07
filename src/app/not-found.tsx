import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="px-4 min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center bg-purple-200 p-10 rounded-md text-gray-600">
        <h2 className="text-3xl font-semibold mb-5">Not Found!</h2>
        <p className="text-lg text-center mb-10">
          Could not find requested resource
        </p>
        <Link
          className="bg-orange-400 py-3 w-[200px] rounded-md flex items-center justify-center font-bold text-white hover:bg-teal-950 transition-all duration-300 ease-in-out"
          href="/"
        >
          <FaHome className="-mt-0.5 mr-1" /> Return Home
        </Link>
      </div>
    </div>
  );
}
