import React, { useState } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const MobileNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav id="mobile-nav" className=" z-50 bg-white w-screen h-20 fixed">
      <button
        className=" mt-6 ml-4 text-3xl font-extrabold cursor-pointer z-90 text-gray-500"
        onClick={handleToggle}
      >
        {navbarOpen ? <MdClose /> : <FiMenu />}
      </button>
      <ul
        className={`text-4xl z-10 mt-20 ${
          navbarOpen
            ? "transform -translate-x-px duration-700 overflow-y-scroll fixed inset-y-0 left-0 h-screen w-full overflow-hidden max-w-[300px]  bg-white"
            : "transform translate-x-0 duration-700 overflow-y-scroll fixed inset-y-0 left-0 h-screen w-0 overflow-hidden max-w-[300px] "
        }`}
      >
        <li className=" text-gray-500 pl-4 pb-4">
          <a onClick={closeMenu}>
            <Link href="/">Home</Link>
          </a>
        </li>
        <li className=" text-gray-500 pl-4 pb-4">
          <a onClick={closeMenu}>
            <Link href="/services">Services</Link>
          </a>
        </li>
        <li className=" text-gray-500 pl-4 pb-4">
          <a onClick={closeMenu}>
            <Link href="tel:12892346622">Call</Link>
          </a>
        </li>
        <li className=" text-gray-500 pl-4 pb-4">
          <a onClick={closeMenu}>
            <Link href="/contact">Contact</Link>
          </a>
        </li>
        <li className=" text-gray-500 pl-4 pb-4">
          <a onClick={closeMenu}>
            <Link href="/about">About</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
