"use client";

import { toast } from "sonner";

const ContactForm = () => {
  const handleContact = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const image = form.img.value;

    const volunteerData = { name, email, phone, image };
    try {
      toast.message("Message has been sent");
      form.reset();
    } catch (err) {
      toast.message("Error while sending message");
      form.reset();
    }
  };
  return (
    <div>
      <h1 className="text-white font-semibold text-center text-3xl sm:text-4xl lg:text-5xl md:pt-[35px]">
        CONTACT ME
      </h1>
      <form
        className="w-[96%] sm:w-[90%] md:w-[70%] mx-auto mt-4  sm:mt-6 md:mt-10"
        onSubmit={handleContact}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative ">
            <input
              required
              type="text"
              name="name"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 - origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 bg-clip-text  text-white ">
              Your name
            </label>
          </div>
          <div className="relative ">
            <input
              required
              type="email"
              name="email"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 - origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 bg-clip-text  text-white ">
              Your Email
            </label>
          </div>
          <div className="relative ">
            <input
              required
              type="number"
              name="phone"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 - origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 bg-clip-text  text-white ">
              Your Phone
            </label>
          </div>
          <div className="relative ">
            <input
              required
              type="text"
              name="img"
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 - origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 bg-clip-text  text-white ">
              Your Address
            </label>
          </div>
          <div className="relative  col-span-2">
            <textarea
              required
              minLength={50}
              name="message"
              rows={5}
              className="peer block w-full appearance-none border-0 border-b border-gray-500  bg-transparent py-2.5 px-0 text-sm text-white  focus:outline-none focus:ring-0"
              placeholder=" "
            ></textarea>
            <label className="absolute top-3 - origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 bg-clip-text  text-white ">
              Your message
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="relative mt-5 z-10 cursor-pointer  rounded-md border  border-purple-600    btn  px-10 py-2  text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
