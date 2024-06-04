"use client";
import Image from "next/image";
import loginLogo from "../../assets/Login/login-vector.png";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import Spinner from "@/components/ui/Spinner/Spinner";
import { registerUser } from "@/services/actions/registerUser";
import { useState } from "react";
import { toast } from "sonner";
import { loginUser } from "@/services/actions/loginUser";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { baseApi } from "@/redux/api/baseApi";

interface IFormInput {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  profile?: {
    bio?: string;
    age?: number;
  };
}

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.profile?.age) {
      data.profile.age = Number(data.profile.age);
    }
    try {
      setIsLoading(true);
      const userInfo = await registerUser(data);

      if (userInfo.success) {
        const result = await loginUser({
          email: data.email,
          password: data.password,
        });

        if (result?.data?.token) {
          localStorage.setItem(
            "accessToken",
            JSON.stringify(result.data.token)
          );
          toast.success(userInfo.message);
          router.push("/");
          dispatch(baseApi.util.invalidateTags(["trips", "user", "users"]));
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
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
            <h2 className="text-center font-montserrat text-3xl mt-5">
              Travel Buddy Register
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col p-10 bg-slate-100"
            >
              <div className="mb-8 relative">
                <span className=" absolute text-red-400 -top-1 right-0">*</span>
                <input
                  type="text"
                  className="bg-transparent border-b-2 w-[270px] md:w-[300px] place-content-center border-b-gray-300 font-montserrat placeholder-gray-500 outline-none"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm text-right">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-8 relative">
                <span className=" absolute text-red-400 -top-1 right-0">*</span>
                <input
                  type="text"
                  className="bg-transparent border-b-2 w-[270px] md:w-[300px] place-content-center border-b-gray-300 font-montserrat placeholder-gray-500 outline-none"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  placeholder="Username"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm text-right">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="mb-8 relative">
                <span className=" absolute text-red-400 -top-1 right-0">*</span>
                <input
                  type="email"
                  className="bg-transparent border-b-2 w-[270px] md:w-[300px] place-content-center border-b-gray-300 font-montserrat placeholder-gray-500 outline-none"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm text-right">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-8 relative">
                <span className=" absolute text-red-400 -top-1 right-0">*</span>
                <input
                  type="password"
                  className="bg-transparent border-b-2 w-[270px] md:w-[300px] place-content-center border-b-gray-300 font-montserrat placeholder-gray-500 outline-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm text-right">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mb-8 relative">
                <span className=" absolute text-red-400 -top-1 right-0">*</span>
                <input
                  type="password"
                  className="bg-transparent border-b-2 w-[270px] md:w-[300px] place-content-center border-b-gray-300 font-montserrat placeholder-gray-500 outline-none"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  placeholder="Confirm password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm text-right">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <input
                type="text"
                className="bg-transparent border-b-2 mb-8 w-[270px] md:w-[300px] place-content-center border-b-gray-300 font-montserrat placeholder-gray-500 outline-none"
                {...register("profile.age")}
                placeholder="Age"
              />
              <input
                type="text"
                className="bg-transparent border-b-2 mb-8 w-[270px] md:w-[300px] place-content-center border-b-gray-300 font-montserrat placeholder-gray-500 outline-none"
                {...register("profile.bio")}
                placeholder="Bio"
              />
              <button
                className="bg-purple-800 hover:bg-violet-950 py-3 w-[270px] md:w-[300px] rounded-3xl text-gray-200 tracking-wide outline-none transition-all duration-700 ease-in-out flex justify-center items-center"
                type="submit"
              >
                {isLoading && <Spinner />}
                Submit
              </button>
            </form>
            <p className="text-center text-sm">
              Already registered?{" "}
              <Link className=" text-base text-blue-800 ml-1" href="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
