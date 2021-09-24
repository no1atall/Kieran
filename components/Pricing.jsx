import CompanySpacer from "./CompanySpacer";
import { v4 as uuidv4 } from 'uuid';

//Phone Services offered, description and color can be left blank if defaults are needed.
//uuid is used to generate a unique ID for each object in the array
const PhoneServices = [
  {
    id: uuidv4(),
    service: "Screen Repair",
    price: "From £49.99",
    description: "Apple And Andriod Phones",
    color: "text-primary",
  },
  {
    id: uuidv4(),
    service: "Software Reset",
    price: "£29.99",
    description: "Reset The Phone's Internal Software And Update As Needed",
    color: "",
  },
  {
    id: uuidv4(),
    service: "App Installations",
    price: "Variable",
    description: "Insall Various Apps As Requested By The Customer",
    color: "",
  },
  {
    id: uuidv4(),
    service: "Battery Replacement",
    price: "From £24.99",
    description: "Price Varies By Model",
    color: "text-primary",
  },
  {
    id: uuidv4(),
    service: "Charging Port",
    price: "From £19.99",
    description: "Price Varies By Model",
    color: "text-primary",
  },
  {
    id: uuidv4(),
    service: "Camera Replacment",
    price: "From £22.99",
    description: "Price Varies By Model",
    color: "",
  },
  {
    id: uuidv4(),
    service: "Home Button Repair",
    price: "From £14.99",
    description: "Price Varies By Model",
    color: "",
  },
  {
    id: uuidv4(),
    service: "Speaker Replacement",
    price: "From £29.99",
    description: "Price Varies By Model",
    color: "text-primary",
  },
  {
    id: uuidv4(),
    service: "Mic Replacement",
    price: "From £29.99",
    description: "Price Varies By Model",
    color: "text-primary",
  },
  {
    id: uuidv4(),
    service: "Wifi/Signal Repair",
    price: "From £14.99",
    description: "Price Varies By Model",
    color: "",
  },
];

//Computer Services offered, description and color can be left blank if defaults are needed.
//uuid is used to generate a unique ID for each object in the array
const ComputerServies = [
  {
    id: uuidv4(),
    service: "Laptop Screen Repair",
    price: "From £109.99",
    description: "Lenovo, Asus, Toshiba, HP, Acus, Acer, ",
    color: "text-primary",
  },
  {
    id: uuidv4(),
    service: "Drive Upgrades",
    price: "From £49.99",
    description: "Price Varries By Size",
    color: "text-primary",
  },
  {
    id: uuidv4(),
    service: "Computer Upgrades",
    price: "From £29.99",
    description:
      "Parts Either Provided By The Customer Or Payed For Seperately",
  },
  {
    id: uuidv4(),
    service: "Windows Password Removal",
    price: "£49.99",
    description:
      "Proof Of Ownership Must Be Provided Prior To Services Being Rendered",
    color: "",
  },
  {
    id: uuidv4(),
    service: "Virus Removal",
    price: "£29.99",
    description: "Malware Included",
    color: "",
  },
  {
    id: uuidv4(),
    service: "PC Custom Built",
    price: "Variable",
    description: "Price Varies By Customer Needs And Specifications ",
    color: "",
  },
  {
    id: uuidv4(),
    service: "Boot And Bios Repair",
    price: "From £39.99",
    description: "",
    color: "",
  },
  {
    id: uuidv4(),
    service: "Keyboard Repairs",
    price: "From £44.99",
    description: "",
    color: "",
  },
  {
    id: uuidv4(),
    service: "Trackpad Repairs",
    price: "From £34.99",
    description: "",
    color: "",
  },
  {
    id: uuidv4(),
    service: "Data Transfer",
    price: "£39.99",
    description: "",
    color: "text-primary  ",
  },
];

//Apple Service specific pricing, description and color can be left blank if defaults are needed.
//uuid is used to generate a unique ID for each object in the array
const AppleServices = [
  {
    id: uuidv4(),
    service: "Screen Repair",
    price: "From £199.99",
    description: "Price Varies By Model",
    color: "text-primary",
  },
  {
    id: uuidv4(),
    service: "Trackpad Repair",
    price: "From £99.99",
    description: "Price Varies By Model",
    color: "",
  },
  {
    id: uuidv4(),
    service: "Touchbar Repair",
    price: "From £99.99",
    description: "Price Varies By Model",
    color: "",
  },
  {
    id: uuidv4(),
    service: "Keyboard Repair",
    price: "From £59.99",
    description: "Price Varies By Model",
    color: "",
  },
];

const Pricing = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <CompanySpacer />
      <h2 className="text-center text-5xl mt-12">Our Services And Pricing</h2>
      <div className="flex flex-col sm:flex-row w-full mt-12 font-bold sm:text-lg">
        <div className=" sm:w-[50%] mx-4">
          <h3 className="text-2xl sm:text-4xl mb-8 sm:mb-0 ">Phone Repairs</h3>
          {PhoneServices.map((PhoneService, index) => (
            <div key={index} className="mt-4">
              <div className="flex justify-between">
                <h4 className={PhoneService.color}>{PhoneService.service}</h4>
                <span className="">{PhoneService.price}</span>
              </div>
              <div className="font-semibold italic text-gray-500 text-sm">
                {PhoneService.description}
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-12 sm:mt-0 sm:w-[50%] mx-4">
          <h3 className="text-2xl sm:text-4xl mb-8 sm:mb-0">
            PC Repairs{" "}
            <span className="text-gray-500 text-base">
              - Asus, Acer, Lenovo, Toshiba, HP, Dell, Apple
            </span>
          </h3>
          {ComputerServies.map((ComputerService, index) => (
            <div key={index} className="mt-4">
              <div className="flex justify-between">
                <h4 className={ComputerService.color}>
                  {ComputerService.service}
                </h4>
                <span>{ComputerService.price}</span>
              </div>
              <div className="font-semibold italic text-gray-500 text-sm">
                {ComputerService.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-4 font-bold text-lg mb-8">
        <h3 className="text-2xl sm:text-4xl mb-8 sm:mb-0 mt-12 sm:text-center">
          Apple Specific Repair Pricing
        </h3>
        {AppleServices.map((AppleService, index) => (
          <div key={index} className="mt-4 max-w-2xl mx-auto ">
            <div className="flex justify-between">
              <h4 className={AppleService.color}>{AppleService.service}</h4>
              <span>{AppleService.price}</span>
            </div>
            <div className="font-semibold italic text-gray-500 text-sm">
              {AppleService.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
