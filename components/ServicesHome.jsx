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
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita esse deserunt?",
    link: "",
    button: "Repair Your Device",
  },
  {
    id: uuidv4(),
    img: "/broken-computer.jpg",
    alt: "Broken laptop keyboard",
    heading: "Laptop Repairs",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita esse deserunt?",
    link: "",
    button: "Repair Your Device",
  },
  {
    id: uuidv4(),
    img: "/data.png",
    alt: "Screen in need of repairs",
    heading: "Screen Repair",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita esse deserunt?",
    link: "",
    button: "Repair Your Screen",
  },
  {
    id: uuidv4(),
    img: "/password.jpg",
    alt: "Passworded computer",
    heading: "System Resets",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
    button: "Regain Access",
  },
];

const ServicesHome = () => {
  return (
    <section className=" max-w-7xl mx-auto text-gray-800">
      <CompanySpacer />
      <h2 className="text-5xl text-center mt-12">What We Offer</h2>
      <p className="text-xl sm:text-2xl text-center mt-12">
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
