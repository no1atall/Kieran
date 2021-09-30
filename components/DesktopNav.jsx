import Link from "next/link";
import Image from "next/image";

import logo from "../public/logo.png";
import NavInfo from "./NavInfo";

const DesktopNav = () => {
  return (
    <nav className=" fixed z-50 ">
      <NavInfo />
      <div className="w-screen bg-white">
        <div className="h-36 flex px-4 bg-white max-w-7xl mx-auto">
          <div className=" w-40">
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  alt="Dev's PC Repairs Logo"
                  className="cursor-pointer"
                />
              </a>
            </Link>
          </div>
          <ul className="flex mb-8 items-end justify-end text-2xl lg:text-xl font-semibold w-full uppercase mx-4 xl:mx-0 ">
            <li className="hover:text-primary mx-8">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary mx-8">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-primary mx-8">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-primary ml-8">
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
