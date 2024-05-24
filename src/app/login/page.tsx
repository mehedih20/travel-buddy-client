"use client";
import Image from "next/image";
import loginLogo from "../../assets/Login/login-vector.png";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { loginUser } from "@/services/actions/login";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface IFormInput {
  email: string;
  password: string;
}

interface ILoginResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: any;
}

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<IFormInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    let userInfo: ILoginResponse;
    try {
      userInfo = await loginUser(data);
      setLoading(false);

      if (userInfo.success) {
        toast.success(userInfo.message);
        localStorage.setItem(
          "accessToken",
          JSON.stringify(userInfo.data.token)
        );
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-violet-950  flex justify-center items-center">
      <div className="block p-3 absolute top-5 left-5 rounded-full shadow-md bg-violet-800">
        <Link href="/">
          <FiHome className="text-3xl text-white" />
        </Link>
      </div>
      <div className="grid grid-cols-2 shadow-cyan-500/50 shadow-2xl rounded-3xl overflow-hidden">
        <div className="pr-14 pl-5 py-20 bg-gradient-to-r from-purple-800 to-purple-900 flex items-center">
          <Image src={loginLogo} alt="login-img" width={350} height={350} />
        </div>
        <div className="bg-slate-100 relative flex justify-center">
          <h2 className="absolute top-5 left-0 bg-gradient-to-r from-purple-800 to-purple-900 py-3 pl-5 pr-10 rounded-tr-3xl rounded-br-3xl text-gray-200 tracking-wide">
            Welcome back
          </h2>
          <div className="py-[80px]">
            <h2 className="text-center font-montserrat text-3xl mt-5">
              Travel Buddy Login
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col p-10"
            >
              <input
                className="bg-transparent border-b-2 mb-8 w-[300px] place-content-center border-b-gray-300 font-montserrat placeholder-gray-500 outline-none"
                {...register("email")}
                placeholder="Email"
              />

              <input
                className="bg-transparent border-b-2 mb-8 w-[300px] place-content-center border-b-gray-300 font-montserrat placeholder-gray-500 outline-none"
                {...register("password")}
                type="password"
                placeholder="Password"
              />

              <button
                className="bg-gradient-to-r from-purple-800 to-purple-900 py-3 pl-5 pr-10 rounded-3xl text-gray-200 tracking-wide outline-none hover:from-blue-800 hover:to-purple-950 transition-colors duration-700 ease-in-out flex justify-center"
                type="submit"
              >
                {loading && (
                  <svg
                    className="animate-spin h-6 w-6 text-slate-200 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 12a10 10 0 1010-10v2A8 8 0 114 12H2z"
                    ></path>
                  </svg>
                )}
                Submit
              </button>
            </form>
            <p className="text-center text-sm">
              Not registered?{" "}
              <Link className=" text-base text-blue-800 ml-1" href="/register">
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
