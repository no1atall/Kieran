import Card from "./Card";
import CompanySpacer from "./CompanySpacer";
import { v4 as uuidv4 } from 'uuid';


// Data regarding servies which will be contained in cards
//uuid is used to generate a unique ID for each object in the array
const ServicesData = [
  {
    id: uuidv4(),
    img: "/broken-phone.jpg",
    alt: "Borken Iphone which is opened for repairs",
    heading: "Phone Repairs",
    text: "We use original parts sourced directly from the manufacturer to bring your phone back to factory standard.",
    link: "#homeContact",
    button: "Repair Your Device",
  },
  {
    id: uuidv4(),
    img: "/broken-computer.jpg",
    alt: "Broken laptop keyboard",
    heading: "Laptop Repairs",
    text: "We diagnose and repair your laptops as quickly as possible, getting you back on track with your busy life.",
    link: "#homeContact",
    button: "Repair Your Device",
  },
  {
    id: uuidv4(),
    img: "/data.png",
    alt: "Screen in need of repairs",
    heading: "Screen Repair",
    text: "Be it a phone or laptop screen which needs repair, we do it all, using our genuine factory sourced parts. ",
    link: "#homeContact",
    button: "Repair Your Screen",
  },
  {
    id: uuidv4(),
    img: "/password.jpg",
    alt: "Passworded computer",
    heading: "System Resets",
    text: "Locked out of your computer? Need a system refesh and flush? Trust us to get your computer back to working condition.",
    link: "#homeContact",
    button: "Regain Access",
  },
];

const ServicesHome = () => {
  return (
    <section className=" max-w-7xl mx-auto text-gray-800">
      <CompanySpacer />
      <h2 className="text-4xl sm:text-5xl text-center mt-12">What We Offer</h2>
      <p className=" mx-2 text-lg sm:text-2xl text-center mt-12">
        Repairs carried out to high standard using genuine parts wherever
        available. If no genuine parts are available then we use manufacturer
        recommended alternatives.
      </p>
      <div className="flex flex-col sm:flex-wrap xl:flex-nowrap items-center sm:justify-center sm:items-stretch sm:flex-row mt-12">
        {ServicesData.map((data, index) => (
          <Card
            key={data.id}
            img={data.img}
            heading={data.heading}
            text={data.text}
            link={data.link}
            button={data.button}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesHome;
