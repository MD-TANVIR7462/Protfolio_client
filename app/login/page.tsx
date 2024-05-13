/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { useState } from "react";

const loginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const hangleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const UserLoginInfo = {
      email,
      password,
    };

    try {
    } catch (error: any) {}
  };
  return (
    <div>
      <div className="flex  h-[90dvh] md:h-[80dvh] w-full  items-center justify-center  bg-cover bg-no-repeat mt-8">
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-[12dvh] py-[12dvh] shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 text-2xl">TANVIR</h1>
              <span className="text-gray-300"> Please Enter Login Details</span>
            </div>
            <form onSubmit={hangleLogin} className="z-[-1]">
              <div className="mb-4 text-lg">
                <input
                  className=" rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-4 sm:px-12  py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="email"
                  name="name"
                  required
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className=" rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-4 sm:px-12 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="name"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-8 flex justify-center text-lg">
                <button
                  type="submit"
                  className=" rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="w-full text-center">
        {" "}
        <span className="text-gray-300">
          Why Here ?{" "}
          <Link
            href={"/"}
            className="cursor-pointer hover:text-purple-700 text-purple-500 "
          >
            Go Home
          </Link>
        </span>
      </p>
    </div>
  );
};

export default loginPage;
