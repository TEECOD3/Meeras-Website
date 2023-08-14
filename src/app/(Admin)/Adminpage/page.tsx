"use client";
import { Metadata } from "next";
import React, { useState, useEffect } from "react";
import { siteConfig } from "../../../../config/site";
import Image from "next/image";
import meeraslogo from "../../../../public/Meeraslogo.png";
import loginimage from "../../../../public/Saly-10.png";
import { Input } from "@/components/UI/input";
// import { Checkbox } from "@/components/UI/checkbox";
import { Label } from "@/components/UI/label";
import { Button } from "@/components/UI/button";
// import { EyeOff } from "lucide-react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "admin",
  description: siteConfig.description,
  icons: {
    icon: "/Meeraslogo.png",
  },
};

const Admin = () => {
  const [Passwordseen, setPasswordseen] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });
  const submithandler = async (data: any) => {
    router.push("/Adminpage/AdminDashboard");
    console.log(data);
    router.push("/Adminpage/AdminDashboard");
  };

  const handlepasswordtoggle = () => {
    setPasswordseen(!Passwordseen);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <section className="h-screen w-screen py-4 ">
      <header className="container">
        <Image src={meeraslogo} height={80} width={80} alt="meeras logo" />
      </header>
      <div className="container mx-auto mt-10 flex h-[80vh] w-full flex-col justify-center md:flex-row md:justify-between ">
        <div className="flex justify-start rounded-xl  border-2 border-gray-200 py-6 shadow-xl lg:w-[40%]">
          <form
            onSubmit={handleSubmit(submithandler)}
            className="flex w-full flex-col justify-center px-6 py-6 sm:px-10"
          >
            <div className="mb-8 flex flex-col gap-y-6 ">
              <h2 className="text-xl font-medium ">Welcome</h2>
              <div className="">
                <h1 className="text-3xl font-bold">Sign in to</h1>
                <p className="mt-3 text-base font-medium">Meeras Dashboard</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="">
                <Label
                  htmlFor="email"
                  className="text-base font-semibold capitalize"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  className="mt-2 px-4 py-6 font-light text-gray-400"
                  placeholder="Enter your Username.."
                  {...register("email")}
                />
                <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                  {errors.email?.message}
                </p>
              </div>

              <div className="">
                <div className="relative">
                  <Label
                    className="mb-4 text-base capitalize"
                    htmlFor="password"
                  >
                    password
                  </Label>
                  <Input
                    type={Passwordseen ? "text" : "password"}
                    id="password"
                    className="mt-2 px-4 py-6 font-light text-gray-700"
                    placeholder="Enter your Password..."
                    {...register("password")}
                  />

                  {Passwordseen ? (
                    <BsEye
                      className="absolute right-4 top-1/2 cursor-pointer text-2xl text-gray-400"
                      onClick={handlepasswordtoggle}
                    />
                  ) : (
                    <BsEyeSlash
                      className="absolute right-4 top-1/2 cursor-pointer text-2xl text-gray-400"
                      onClick={handlepasswordtoggle}
                    />
                  )}
                  <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                    {errors.password?.message}
                  </p>
                </div>

                <div className="my-8 flex  items-center justify-between  gap-x-3 ">
                  <div className="flex items-center gap-x-2">
                    <Input type="checkbox" id="remember" className="h-4 w-4" />
                    {/* <Checkbox
                      id="remember"
                      className=""
                      {...register("remember")}
                    /> */}
                    <Label
                      htmlFor="remember"
                      className="text-sm font-normal text-gray-600"
                    >
                      Remember me
                    </Label>
                  </div>

                  <div className="cursor-pointer text-sm font-normal text-gray-500">
                    forgot password?
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <Button
                type="submit"
                className="w-full bg-blue-700 py-8 text-base font-semibold capitalize"
              >
                login
              </Button>
            </div>
          </form>
        </div>
        <div className="relative hidden items-center justify-center md:flex md:w-[50%]">
          <Image
            src={loginimage}
            alt="Admin login image"
            height={900}
            width={500}
            className="lg:-mt-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Admin;
