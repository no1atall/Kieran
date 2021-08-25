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
    <nav id="mobile-nav" className="relative">
      <button
        className="fixed top-6 left-4 text-3xl font-extrabold cursor-pointer z-20 text-gray-600 "
        onClick={handleToggle}
      >
        {navbarOpen ? <MdClose /> : <FiMenu />}
      </button>
      <ul
        className={`text-4xl  ${
          navbarOpen
            ? "overflow-y-scroll fixed inset-y-0 left-0 h-screen w-full overflow-hidden max-w-[300px] z-10 bg-white"
            : "overflow-y-scroll fixed inset-y-0 left-0 h-screen w-0 overflow-hidden max-w-[300px] z-10"
        }`}
      >
        <li onClick={closeMenu} className=" pt-20 pl-4 pb-4">
          <Link href="/">Home</Link>
        </li>
        <li onClick={closeMenu} className=" pl-4 pb-4">
          <Link href="tel:12892346622">Call Us</Link>
        </li>
        <li onClick={closeMenu} className=" pl-4 pb-4">
          <Link href="#Menu">Menu</Link>
        </li>
        <li onClick={closeMenu} className=" pl-4 pb-4">
          <Link href="#Location">Find Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;