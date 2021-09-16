import CompanySpacer from "./CompanySpacer";


//Phone Services Offered
const PhoneServices = [
  {
    id: 1,
    service: "Screen Repair",
    price: "From £49.99",
    description: "Apple and Andriod Phones",
  },
  { id: 2, service: "", price: "", description: "" },
  { id: 3, service: "", price: "", description: "" },
  { id: 4, service: "", price: "", description: "" },
  { id: 5, service: "", price: "", description: "" },
  { id: 6, service: "", price: "", description: "" },
];

//Computer Services offered
const ComputerServies = [
  {
    id: 1,
    service: "Laptop Repair",
    price: "From £49.99",
    description: "Lenovo, Asus, Toshiba",
  },
  { id: 2, service: "Computer Upgrades", price: "£49.99", description: "" },
  { id: 3, service: "Windows Password Removal", price: "£49.99", description: "" },
  { id: 4, service: "", price: "", description: "" },
  { id: 5, service: "", price: "", description: "" },
  { id: 6, service: "", price: "", description: "" },
];

const Pricing = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <CompanySpacer />
      <h2 className="text-center text-5xl mt-12">Our Services And Pricing</h2>
      <div className="flex w-full mt-8 font-bold text-lg">
        <div className="w-[50%] mx-4">
          {PhoneServices.map((PhoneService, index) => (
            <div className="mt-4">
              <div className="flex justify-between">
                <h4>{PhoneService.service}</h4>
                <span>{PhoneService.price}</span>
              </div>
              <div className="font-semibold italic text-gray-500 text-sm">{PhoneService.description}</div>
            </div>
          ))}
        </div>
        <div className="w-[50%] mx-4">
          {ComputerServies.map((ComputerService, index) => (
            <div className="mt-4">
              <div className="flex justify-between">
                <h4>{ComputerService.service}</h4>
                <span>{ComputerService.price}</span>
              </div>
              <div className="font-semibold italic text-gray-500 text-sm">{ComputerService.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
