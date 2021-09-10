import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dev's PC Repairs</title>
        <link rel="icon" href="/Devs_PC_Repairs_Logo.png" />
      </Head>
      
      <Navbar/>
      <Hero/>
      <div className="max-w-7xl mx-auto text-3xl">
        
        <h1 className=" h-screen flex justify-center items-center hover:text-green-400">
          Home Page. To be built  
        </h1>
      </div>
      <Footer/>
    </div>
  )
}
