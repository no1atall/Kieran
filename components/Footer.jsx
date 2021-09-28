import Image from "next/image"


const Footer = () => {
    return ( 
    <footer className="bg-gray-800 text-white">
        <div className="h-24 px-4 max-w-7xl mx-auto">
        <Image className="z-50" src="/motherboard.jpg" width={100} height={100}/>
        The footer section goes here
        </div>
    </footer> );
}
 
export default Footer;