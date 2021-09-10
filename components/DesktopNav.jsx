import Link from "next/link";
import Image from "next/image";

import Logo from "../public/Devs_PC_Repairs_Logo.png";
import NavInfo from "./NavInfo";

const DesktopNav = () => {
  return (
    <nav className="z-10 fixed w-screen ">
      <NavInfo />
      <div className="w-screen bg-white">
        <div className="h-36 flex px-4 bg-white max-w-7xl mx-auto">
          <div className=" w-40">
            <Link href="/">
              <Image
                src={Logo}
                alt="Dev's PC Repairs Logo"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <ul className="flex items-center justify-end text-2xl lg:text-3xl font-semibold w-full uppercase ">
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
