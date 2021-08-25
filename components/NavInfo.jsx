import Link from "next/link";

const NavInfo = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 bg-gray-800 h-24 text-white flex justify-between items-center">
      <h5>
        Call Us:
        <span className="text-gray-400">
          <Link href="tel:"> Phone number Here</Link>
        </span>
      </h5>
      <h5>
        Email:
        <span className="text-gray-400">
          <Link href=""> devspcrepairs@gmail.com</Link>
        </span>
      </h5>
    </div>
  );
};

export default NavInfo;
