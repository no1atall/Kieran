import Head from "next/head";
import AboutHome from "../components/AboutHome";
import ContactHome from "../components/ContactHome";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PartsHome from "../components/PartHome";
import Pricing from "../components/Pricing";
import ServicesHome from "../components/ServicesHome";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dev's PC Repairs</title>
        <link rel="icon" href="/Devs_PC_Repairs_Logo.png" />
      </Head>

      <Navbar />
      <Hero />
      <ServicesHome />
      <Pricing/>
      {/* <AboutHome />
      <PartsHome/> */}
      <ContactHome/>

      <Footer />
    </div>
  );
}
