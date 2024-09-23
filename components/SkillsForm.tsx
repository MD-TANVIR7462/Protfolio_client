/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SkillsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
const router = useRouter()
  const onSubmit = async (skillsData: any) => {
    const res = await fetch("https://protfolio-server-two.vercel.app/api/v1/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(skillsData),
      cache: "no-store",
    });
    const data = await res.json();
    if (data.success) {
     
      toast.success(data.message);
      router.refresh()
      reset()
  
    }
    if (!data.success) {
      toast.error(data.message);
    }
  };

  return (
    <div className="">
      <h1 className="text-white  font-semibold text-center text-3xl sm:text-4xl lg:text-5xl md:pt-[35px]">
        Add New Skill
      </h1>
      <form
        className="w-[96%] sm:w-[90%] md:w-[70%] mx-auto mt-4  sm:mt-6 md:mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative z-0">
            <input
              {...register("title", { required: true })}
              type="text"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 - origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-400">
              Skill name
            </label>
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="relative z-0">
            <input
              {...register("percent", { required: true })}
              type="number"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 - origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-400">
              Percentage
            </label>
            {errors.percentage && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          {/* Similarly, implement other fields with validation */}
        </div>
        <button
          type="submit"
          className="mt-5 rounded-md border border-purple-500 btn hover:bg-gray-400 px-10 py-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SkillsForm;
