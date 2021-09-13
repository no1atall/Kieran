const Hero = () => {
  return (
    <main className="bg-hero-image bg-no-repeat bg-center bg-cover h-[90vh] ">
      <div className="bg-black bg-opacity-40 w-screen h-[90vh]">
        <section className=" max-w-7xl mx-auto flex flex-col justify-center text-white h-[90vh] ">
          <h1 className="text-7xl my-4 mt-36">Lorem ipsum dolor sit.</h1>
          <p className="text-3xl my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
            perspiciatis numquam, architecto, reiciendis sapiente officia,
            corporis quia ratione repellendus sunt explicabo eum! Harum maiores
            aliquam distinctio dicta sunt sequi repellendus?
          </p>
          <p className="text-3xl my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas
            quisquam consectetur nostrum officiis omnis earum ab voluptate eum
            voluptas repudiandae illo ipsam unde, blanditiis magnam
            necessitatibus fuga alias nesciunt?
          </p>
          <button className="bg-primary text-white hover:bg-primarylight hover:text-gray-900 text-xl mt-4 px-4 py-2 w-36 rounded-lg font-semibold">
            Get a quote
          </button>
        </section>
      </div>
    </main>
  );
};

export default Hero;
