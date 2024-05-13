/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useForm } from "react-hook-form";

const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="">
      <h1 className="text-white  font-semibold text-center text-3xl sm:text-4xl lg:text-5xl md:pt-[35px]">
        Add New Experience
      </h1>
      <form
        className="w-[96%] sm:w-[90%] md:w-[70%] mx-auto mt-4  sm:mt-6 md:mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative z-0">
            <input
              {...register("name", { required: true })}
              type="text"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-400">
              Project Name
            </label>
          </div>
          <div className="relative z-0">
            <input
              {...register("image", { required: true })}
              type="url"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=""
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-400">
             Image Link
            </label>
          </div>
          <div className="relative z-0">
            <input
              {...register("live", { required: true })}
              type="url"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-400">
              Live Link
            </label>
          </div>
          <div className="relative z-0">
            <input
              {...register("server", { required: true })}
              type="url"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-400">
              Server Link
            </label>
          </div>
          <div className="relative z-0">
            <input
              {...register("server", { required: true })}
              type="client"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 text-purple-400">
              Client Link
            </label>
          </div>
          
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

export default ProjectForm;
