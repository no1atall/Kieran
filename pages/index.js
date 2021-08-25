import Head from 'next/head'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dev's PC Repairs</title>
        <link rel="icon" href="/Devs_PC_Repairs_Logo.png" />
      </Head>
      
      <Navbar/>
      <div className="max-w-7xl mx-auto text-3xl">
        <h1 className=" h-screen flex justify-center items-center">
          Home Page. To be built  
        </h1>
      </div>
    </div>
  )
}
