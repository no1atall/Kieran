import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logo from "../public/logo.png";
import NavInfo from "./NavInfo";

const links = [
  { text: "Home", link: "/" },
  { text: "Services", link: "/services" },
  { text: "Contact Us", link: "/contact" },
  { text: "About Us", link: "/about" },
];

const DesktopNav = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className=" fixed z-50">
      <NavInfo />
      <div className="w-screen bg-white">
        <div className="h-36 flex px-4 bg-white max-w-7xl mx-auto">
          <div className=" w-40">
            <Link href="/">
              <a onClick={() => setActive(0)}>
                <Image
                  src={logo}
                  alt="Dev's PC Repairs Logo"
                  className="cursor-pointer"
                />
              </a>
            </Link>
          </div>
          <ul className="flex mt-24 items-start justify-end text-2xl lg:text-xl font-semibold w-full uppercase mx-4 xl:mx-0 ">
            {links.map((link, index) => {
              let isActive = active === index;
              return (
                <li className="hover:text-primary ml-8">
                  <a onClick={() => setActive(index)}>
                    <Link href={link.link}>{link.text}</Link>
                  </a>
                  {isActive ? (
                    <hr className="transition duration-1000 ease-in-out h-1 w-full bg-primary" />
                  ) : (
                    <hr className="border-white" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
