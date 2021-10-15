import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CompanySpacer from "./CompanySpacer";

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^([^0-9]*)$/, "Your name should not contain numbers")
      .required("Your name is required"),
    subject: yup.string().required("Please tell us your problem"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Your email is required"),
    message: yup
      .string()
      .required("Please let us know a bit more about your problem"),
  })
  .required();

const ContactHome = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "We have recieved your message",
      text: "We will be in touch with you shortly",
      icon: "success",
      confirmButtonColor: "#10B981",
    });
  };

  console.log(watch("name"));

  return (
    <div id="homeContact" className=" bg-gray-100 pb-8 pt-2">
      <div className="max-w-7xl  mx-auto">
        <CompanySpacer />
        <h2 className="text-center text-5xl mt-12">Contact Us</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" text-center mt-8 flex flex-col items-start mx-auto w-4/5 sm:w-3/5"
        >
          <input
            type="text"
            defaultValue=""
            {...register("name")}
            name="name"
            placeholder="Your Name"
            id=""
            className=" shadow-md my-4 w-full  font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          {errors.name && (
            <span className="text-red-600 font-semibold">
              {errors.name.message}
            </span>
          )}

          <input
            type="text"
            defaultValue=""
            {...register("subject")}
            name="subject"
            placeholder="Your Issue"
            id=""
            className=" shadow-md my-4 w-full font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          {errors.subject && (
            <span className="text-red-600 font-semibold">
              {errors.subject.message}
            </span>
          )}
          <input
            type="tel"
            defaultValue=""
            {...register("phone")}
            name="phone"
            id=""
            placeholder="Your Phone Number (optional)"
            className=" shadow-md my-4 w-full font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          <input
            type="email"
            defaultValue=""
            {...register("email")}
            name="email"
            id=""
            placeholder="Your Email"
            className=" shadow-md my-4 w-full font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          {errors.email && (
            <span className="text-red-600 font-semibold">
              {errors.email.message}
            </span>
          )}
          <textarea
            defaultValue=""
            {...register("message")}
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Tell Us About Your Issue"
            className=" shadow-md my-4 w-full font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500  rounded-md px-6 py-2"
          ></textarea>
          {errors.message && (
            <span className="text-red-600 font-semibold">
              {errors.message.message}
            </span>
          )}
          <button
            type="submit"
            className="transition duration-500 ease-in-out my-4 w-full sm:w-2/5 lg:w-1/5 py-3 font-semibold  rounded-md bg-primary text-white hover:bg-green-500 "
          >
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactHome;
