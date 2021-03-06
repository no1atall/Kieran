import Link from "next/link";
import Swal from "sweetalert2";

const NavInfo = () => {
  return (
    <div className="w-screen bg-gray-800 px-4 xl:px-0">
      <div className=" max-w-7xl mx-auto px-4 bg-gray-800 h-12 text-white flex justify-between items-center">
        <h5>
          Call Us:
          <span className="text-gray-400 hover:text-primarylight">
            <Link href="tel:07534 014483"> 07534 014483</Link>
          </span>
        </h5>
        <h5>
          Email:
          <span className="text-gray-400 hover:text-primarylight ml-1">
            <button
              onClick={() =>
                navigator.clipboard.writeText("devspcrepairs@gmail.com") &&
                Swal.fire({
                  title: "Email copied to clipboard",
                  text: "We look forward to hearing from you!",
                  icon: "success",
                  confirmButtonColor: "#10B981",
                })
              }
            >
              devspcrepairs@gmail.com
            </button>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default NavInfo;
