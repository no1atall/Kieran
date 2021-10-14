import Head from "next/head";
import AboutHome from "../components/AboutHome";
import ContactHome from "../components/ContactHome";
import Hero from "../components/Hero";
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

      <Hero />
      <ServicesHome />
      <Pricing />
      
      <ContactHome />
    </div>
  );
}
