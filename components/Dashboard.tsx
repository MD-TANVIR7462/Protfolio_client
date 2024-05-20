"use client";

import { ReactNode, useEffect, useState } from "react";

import Link from "next/link";

const Dashboard = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [windowWidth]);

  return (
    <div className="min-h-screen flex flex-col ">
      {windowWidth < 768 && (
        <button
          className="absolute top-4 right-4 z-50 btn btn-circle btn-outline text-gray-500 btn-sm"
          onClick={toggleMenu}
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      )}

      {toggle && (
        <div className="fixed top-0 left-0 h-full w-56 bg-gray-200 l overflow-hidden z-40 ">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-3xl uppercase "></h1>
          </div>
          <ul className="flex flex-col py-4">
            <li>
              <Link
                href={"/Tanvir/dashboard"}
                className="flex flex-row items-center h-12 transform hover:bg-gray-300 transition-transform duration-200  hover:rounded-xl  text-gray-700 hover:text-black"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/Tanvir/dashboard/skills"}
                className="flex flex-row items-center h-12 transform hover:bg-gray-300 transition-transform duration-200  hover:rounded-xl  text-gray-700 hover:text-black"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-sm font-medium">Skills</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/Tanvir/dashboard/experience"}
                className="flex flex-row items-center h-12 transform hover:bg-gray-300 transition-transform duration-200  hover:rounded-xl  text-gray-700 hover:text-black"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-sm font-medium">Experience</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/Tanvir/dashboard/Project"}
                className="flex flex-row items-center h-12 transform hover:bg-gray-300 transition-transform duration-200  hover:rounded-xl  text-gray-700 hover:text-black"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-sm font-medium">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="flex flex-row items-center h-12 transform hover:bg-gray-300 transition-transform duration-200  hover:rounded-xl  text-gray-700 hover:text-black"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-sm font-medium">Home</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/*content */}

      <div
        className={`flex-grow ${
          toggle ? "" : ""
        } w-[98%] mt-20  mx-auto   md:ml-[30dvh]  p-1 md:p-4 rounded-lg md:w-[67%] lg:w-[73%] xl:w-[80%]  `}
      >
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
