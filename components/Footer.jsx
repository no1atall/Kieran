import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-16 text-sm sm:text-2xl">
      <div className=" px-4 max-w-7xl mx-auto text-center">
        {/* <ul className="flex justify-center  py-8">
            <li className="hover:text-primarylight mx-1 font-bold sm:mx-4">
                <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primarylight mx-1 font-bold sm:mx-4">
                <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-primarylight mx-1 font-bold sm:mx-4">
                <Link href="/contact">Contact US</Link>
            </li>
            <li className="hover:text-primarylight mx-1 font-bold sm:mx-4">
                <Link href="/about">About Us</Link>
            </li>
        </ul> */}
        <p className="text-xl">
          Dev's Repair Shop © {new Date().getFullYear()} All Rights Reserved
        </p>
        <p className="mt-8 text-xl">Proudly Made By Ian Vicherek</p>
      </div>
    </footer>
  );
};

export default Footer;
