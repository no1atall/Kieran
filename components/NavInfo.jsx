import Link from "next/link";

const NavInfo = () => {
  return (
    <div className="w-screen bg-gray-800">
      <div className=" max-w-7xl mx-auto px-4 bg-gray-800 h-12 text-white flex justify-between items-center">
        <h5>
          Call Us:
          <span className="text-gray-400 hover:text-primarylight">
            <Link href="tel:"> Phone number Here</Link>
          </span>
        </h5>
        <h5>
          Email:
          <span className="text-gray-400 hover:text-primarylight">
            <Link href=""> devspcrepairs@gmail.com</Link>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default NavInfo;
