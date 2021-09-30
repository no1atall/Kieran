import Link from "next/link";
import Swal from "sweetalert2";

const InfoBackground = ({ phone, email }) => {
  return (
    <div>
      <div className="bg-gray-200 rounded-full w-5/6 mx-auto my-4 flex items-center text-2xl">
        <span className="bg-primary rounded-full w-12 h-12 flex justify-center items-center">
          {phone.icon}
        </span>
        <span className="ml-8 text-gray-900 hover:text-primary">
          <Link href={phone.number}>{phone.text}</Link>
        </span>
      </div>
      <div className="bg-gray-200 rounded-full w-5/6 mx-auto my-4 flex items-center text-2xl">
        <span className="bg-primary  rounded-full w-12 h-12 flex justify-center items-center">
          {email.icon}
        </span>
        <button
          onClick={() =>
            navigator.clipboard.writeText(email.text) &&
            Swal.fire({
              title: "Email copied to clipboard",
              text: "We look forward to hearing from you!",
              icon: "success",
              confirmButtonColor: "#10B981",
            })
          }
          className="ml-8 text-gray-900 hover:text-primary"
        >
          {email.text}
        </button>
      </div>
    </div>
  );
};

export default InfoBackground;
