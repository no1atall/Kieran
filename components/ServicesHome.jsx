import Card from "./Card";
import CompanySpacer from "./CompanySpacer";

// Data regarding servies which will be contained in cards
const ServicesData = [
  {
    id: 1,
    img: "/broken-phone.jpg",
    heading: "Phone Repairs",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita esse deserunt?",
    link: "",
    button: "Read More",
  },
  {
    id: 2,
    img: "/broken-computer.jpg",
    heading: "Laptop Repairs",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita esse deserunt?",
    link: "",
    button: "Read More",
  },
  {
    id: 3,
    img: "/data.png",
    heading: "Screen Repair",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita esse deserunt?",
    link: "",
    button: "Read More",
  },
  {
    id: 4,
    img: "/password.jpg",
    heading: "System Resets",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
    button: "Read More",
  },
];

const ServicesHome = () => {
  return (
    <section className="max-w-7xl mx-auto text-gray-800">
      <CompanySpacer />
      <h2 className="text-5xl text-center mt-12">What We Offer</h2>
      <p className="text-2xl text-center mt-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nobis
        earum odit harum sed ad illum, nisi ratione nihil sunt voluptate dolorum
        adipisci praesentium atque, veritatis quia cumque vero est.
      </p>
      <div className="flex mt-12">
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
