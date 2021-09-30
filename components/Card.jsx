import Image from "next/image";

const Card = (data, index) => {
  return (
    <div className=" mx-auto sm:mx-4 mt-12 min-h-4/5 sm:w-[40%] lg:w-[25%]  flex flex-col   items-center sm:justify-between">
      <Image
        className=""
        alt={data.alt}
        src={data.img}
        height="200px"
        width="300px"
      ></Image>
      <div className="flex flex-col justify-between items-center sm:items-start h-64">
        <div className="flex flex-col justify-between mx-4 sm:mx-0 text-center sm:text-left ">
          <h3 className="mt-4 text-4xl mx-2">{data.heading}</h3>
          <p className="mt-4 text-lg mx-2">{data.text}</p>
        </div>
        <button
          className="transition duration-500 ease-in-out my-6 mx-2 px-4 py-2  w-3/5 sm:w-3/4 xl:w-3/5 bg-primary hover:bg-green-500 
       text-white font-semibold text-base "
        >
          {data.button}
        </button>
      </div>
    </div>
  );
};

export default Card;
