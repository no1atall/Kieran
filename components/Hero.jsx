const Hero = () => {
  return (
    <main className="bg-hero-image bg-no-repeat bg-center bg-cover h-[90vh]  ">
      <div className="bg-black bg-opacity-40  h-[90vh] ">
        <section className=" max-w-7xl mx-auto flex flex-col justify-center text-white h-[90vh] ">
          <h1 className="text-3xl sm:text-6xl text-center sm:text-left font-bold sm:font-normal mx-4 xl:mx-0  my-4 mt-12 sm:mt-36 uppercase">Laptop, PC, And Phone Repairs</h1>
          <p className="text-sm sm:text-3xl text-center sm:text-left font-semibold sm:font-normal mx-4 xl:mx-0  my-4 max-w-3xl">
            We only use genuine parts sourced from the manufacturer to repair
            the devices you entrust to us.
          </p>
          <p className="text-sm sm:text-3xl text-center sm:text-left font-semibold sm:font-normal mx-4 xl:mx-0  my-4 max-w-3xl">
            We do all we can to keep your prices fair and customer satisfaction
            high, whilst maintaining our high repair standards.
          </p>

          <button className="bg-primary text-white hover:bg-green-500 text-base sm:text-xl  mt-8 lg:mt-4 px-4 py-2 mx-auto sm:mx-4 xl:mx-0 w-4/5 sm:w-2/5 lg:w-1/5 rounded-lg font-semibold uppercase">
            Request A Free Quote
          </button>
        </section>
      </div>
    </main>
  );
};

export default Hero;
