import Image from "next/image";

const Card = (data, index) => {
  return (
    <div className=" mx-auto sm:mx-4 mt-12 min-h-4/5 sm:w-[40%] lg:w-[25%]  flex flex-col   items-center sm:items-start justify-between">
        <Image className="" src={data.img} height="200px" width="300px"></Image>
      <div className="flex flex-col  mx-4 sm:mx-0 text-center sm:text-left ">
        <h3 className="mt-4 text-4xl mx-2">{data.heading}</h3>
        <p className="mt-4 text-lg mx-2">{data.text}</p>
      </div>
      <button className="my-6 mx-2 px-4 py-2 bg-primary hover:bg-green-500 
       text-white font-semibold text-base ">
        {data.button}
      </button>
    </div>
  );
};

export default Card;
