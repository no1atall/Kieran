import { useForm } from "react-hook-form"

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
    
    return ( 
        <section className="flex flex-col">
            <h2 className="text-center text-5xl mt-8">Get In Touch</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" text-center text-lg mt-8 flex flex-col items-start mx-8 "
        >
          
          <input
            type="text"
            defaultValue=""
            {...register("name", { required: true })}
            name="name"
            placeholder="Your Name"
            id=""
            className=" shadow-md my-4 w-full  font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          {errors.name && (
            <span className="text-red-600 font-semibold">
              This field is required
            </span>
          )}

          <input
            type="text"
            defaultValue=""
            {...register("subject", { required: true })}
            name="subject"
            placeholder="Your Issue"
            id=""
            className=" shadow-md my-4 w-full font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          {errors.subject && (
            <span className="text-red-600 font-semibold">
              This field is required
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
            {...register("email", { required: true })}
            name="email"
            id=""
            placeholder="Your Email"
            className=" shadow-md my-4 w-full font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          {errors.email && (
            <span className="text-red-600 font-semibold">
              This field is required
            </span>
          )}
          <textarea
            defaultValue=""
            {...register("message", { required: true })}
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Tell Us About Your Issue"
            className=" shadow-md my-4 w-full font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500  rounded-md px-6 py-2"
          ></textarea>
          {errors.message && (
            <span className="text-red-600 font-semibold">
              This field is required
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
        </section>

     );
}
 
export default ContactForm;