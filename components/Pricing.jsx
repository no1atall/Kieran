import CompanySpacer from "./CompanySpacer";

//Phone Services offered, description and color can be left blank if defaults are needed.
const PhoneServices = [
  {
    id: 1,
    service: "Screen Repair",
    price: "From £49.99",
    description: "Apple And Andriod Phones",
    color: "text-primary",
  },
  {
    id: 2,
    service: "Software Reset",
    price: "£29.99",
    description: "Reset The Phone's Internal Software And Update As Needed",
    color: "",
  },
  {
    id: 3,
    service: "App Installations",
    price: "Variable",
    description: "Insall Various Apps As Requested By The Customer",
    color: "",
  },
  {
    id: 4,
    service: "Battery Replacement",
    price: "From £24.99",
    description: "Price Varies By Model",
    color: "text-primary",
  },
  {
    id: 5,
    service: "Charging Port",
    price: "From £19.99",
    description: "Price Varies By Model",
    color: "text-primary",
  },
  {
    id: 6,
    service: "Camera Replacment",
    price: "From £22.99",
    description: "Price Varies By Model",
    color: "",
  },
  {
    id: 7,
    service: "Home Button Repair",
    price: "From £14.99",
    description: "Price Varies By Model",
    color: "",
  },
  {
    id: 8,
    service: "Microphone and Speaker Replacement",
    price: "From £29.99",
    description: "Price Varies By Model",
    color: "text-primary",
  },
  {
    id: 9,
    service: "Wifi/Signal Repair",
    price: "From £14.99",
    description: "Price Varies By Model",
    color: "",
  },
];

//Computer Services offered, description and color can be left blank if defaults are needed.
const ComputerServies = [
  {
    id: 1,
    service: "Laptop Screen Repair",
    price: "From £109.99",
    description: "Lenovo, Asus, Toshiba, HP, Acus, Acer, ",
    color: "text-primary",
  },
  {
    id: 2,
    service: "Drive Upgrades",
    price: "From £49.99",
    description: "Price Varries By Size",
    color: "text-primary",
  },
  {
    id: 3,
    service: "Computer Upgrades",
    price: "From £29.99",
    description:
      "Parts Either Provided By The Customer Or Payed For Seperately",
  },
  {
    id: 4,
    service: "Windows Password Removal",
    price: "£49.99",
    description:
      "Proof Of Ownership Must Be Provided Prior To Services Being Rendered",
    color: "",
  },
  {
    id: 5,
    service: "Virus Removal",
    price: "£29.99",
    description: "Malware Included",
    color: "",
  },
  {
    id: 6,
    service: "PC Custom Built",
    price: "Variable",
    description: "Price Varies By Customer Needs And Specifications ",
    color: "",
  },
  {
    id: 7,
    service: "Boot And Bios Repair",
    price: "From £39.99",
    description: "",
    color: "",
  },
  {
    id: 8,
    service: "Keyboard Repairs",
    price: "From £44.99",
    description: "",
    color: "",
  },
  {
    id: 9,
    service: "Trackpad Repairs",
    price: "From £34.99",
    description: "",
    color: "",
  },
  {
    id: 10,
    service: "Data Transfer",
    price: "£39.99",
    description: "",
    color: "text-primary  ",
  },
];

const AppleServices = [
  {
    id: 1,
    service: "Screen Repair",
    price: "From £199.99",
    description: "Price Varies By Model",
    color: "text-primary",
  },
  {
    id: 2,
    service: "Trackpad Repair",
    price: "From £99.99",
    description: "Price Varies By Model",
    color: "",
  },
  {
    id: 3,
    service: "Touchbar Repair",
    price: "From £99.99",
    description: "Price Varies By Model",
    color: "",
  },
  {
    id: 4,
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
      <div className="flex w-full mt-12 font-bold text-lg">
        <div className="w-[50%] mx-4">
          <h3 className="text-4xl">Phone Repairs</h3>
          {PhoneServices.map((PhoneService, index) => (
            <div key={index} className="mt-4">
              <div className="flex justify-between">
                <h4 className={PhoneService.color}>{PhoneService.service}</h4>
                <span>{PhoneService.price}</span>
              </div>
              <div className="font-semibold italic text-gray-500 text-sm">
                {PhoneService.description}
              </div>
            </div>
          ))}
        </div>
        <div className="w-[50%] mx-4">
          <h3 className="text-4xl">
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
      <div className="mx-4 font-bold text-lg">
        <h3 className="text-4xl mt-12 text-center">
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
