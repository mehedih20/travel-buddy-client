import logo from "../../../assets/Homepage/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-200 rounded">
      <div className="xl:container navbar min-h-fit">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link href="/travels">Travels</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost h-fit flex">
            <Image src={logo} alt="logo" width={70} height={70} />
            <span className="text-2xl text-gray-700">Travel Buddy</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-gray-600">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/travels">Travels</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/login"
            className="btn btn-success px-5 text-white font-bold"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
