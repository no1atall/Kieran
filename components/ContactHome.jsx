import CompanySpacer from "./CompanySpacer";

const ContactHome = () => {
  return (
    <form className=" bg-gray-100 pb-8 pt-4">
      <div className="max-w-7xl  mx-auto">
        <CompanySpacer />
        <h2 className="text-center text-5xl mt-12">Contact Us</h2>
        <div className=" text-center mt-8">
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            id=""
            required
            className=" shadow-md my-4 w-3/5  font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          <input
            type="text"
            name="Subject"
            placeholder="Your Issue"
            id=""
            required
            className=" my-4 w-3/5 font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          <input
            type="tel"
            name="Phone"
            id=""
            placeholder="Your Phone Number (optional)"
            className=" my-4 w-3/5 font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          <input
            type="email"
            name="Email"
            id=""
            placeholder="Your Email"
            required
            className=" my-4 w-3/5 font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500 rounded-md px-6 py-2"
          />
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder="Tell Us About Your Issue"
            className=" my-4 w-3/5 font-medium border-2 border-gray-900 focus:ring-2 focus:outline-none focus:border-transparent focus:ring-green-500  rounded-md px-6 py-2"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default ContactHome;
