import { FiPhoneCall, FiMail } from "react-icons/fi";

import Head from "next/head";

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoBackground from "../components/InfoBackground";

const phone = {
  icon: <FiPhoneCall className=" text-green-500 text-5xl mr-2 mt-1" />,
  number: "tel:07534 014483",
  text: "07534 014483",
};
const email = {
  icon: <FiMail className="text-green-500 text-5xl " />,
  text: "devspcrepairs@gmail.com",
};

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Dev's PC Repairs</title>
        <link rel="icon" href="/Devs_PC_Repairs_Logo.png" />
      </Head>
      {/* <Navbar /> */}
      <div className="max-w-7xl mx-auto text-3xl flex  pt-48 mb-8 ">
        <div className=" w-1/2">
          <InfoBackground email={email} phone={phone} />
        </div>
        <div className=" w-1/2">
          <ContactForm />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
