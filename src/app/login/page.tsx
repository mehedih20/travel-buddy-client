"use client";
import Image from "next/image";
import loginLogo from "../../assets/Login/login-vector.png";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { loginUser } from "@/services/actions/login";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useAppDispatch } from "@/redux/hooks";
import { baseApi } from "@/redux/api/baseApi";

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
  const dispatch = useAppDispatch();
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
        dispatch(baseApi.util.invalidateTags(["trips", "user", "users"]));
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-violet-950  flex justify-center items-center">
      <div className="grid md:grid-cols-2 shadow-cyan-500/50 shadow-2xl rounded-3xl overflow-hidden mx-4 my-10 md:my-4">
        <div className="pr-14 pl-5 py-20 bg-gradient-to-r from-purple-800 to-purple-900 flex items-center">
          <Image src={loginLogo} alt="login-img" width={350} height={350} />
        </div>
        <div className="bg-slate-100 relative flex justify-center">
          <h2 className="absolute top-5 left-0 bg-gradient-to-r from-purple-800 to-purple-900 py-3 pl-5 pr-10 rounded-tr-3xl rounded-br-3xl text-gray-200 tracking-wide">
            Welcome back
          </h2>
          <div className="py-[80px]">
            <h2 className="text-center font-montserrat text-3xl mt-5 text-gray-700">
              Travel Buddy Login
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col p-10 bg-slate-100"
            >
              <input
                type="text"
                className="bg-transparent border-x-0 border-t-0 border-b-2 mb-8 w-[270px] md:w-[300px] place-content-center text-black border-b-blue-300 font-montserrat placeholder-gray-500 outline-none"
                {...register("email")}
                placeholder="Email"
              />
              <input
                type="password"
                className="bg-transparent border-x-0 border-t-0 border-b-2 mb-8 w-[270px] md:w-[300px] place-content-center text-black border-b-blue-300 font-montserrat placeholder-gray-500 outline-none"
                {...register("password")}
                placeholder="Password"
              />

              <button
                className="bg-purple-800 hover:bg-violet-950 py-3 w-[270px] md:w-[300px] rounded-3xl text-gray-200 tracking-wide outline-none transition-all duration-700 ease-in-out flex justify-center"
                type="submit"
              >
                {loading && <Spinner />}
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
