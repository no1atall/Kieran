import Image from "next/image";

const Card = (data, index) => {
  return (
    <div className="mx-4 min-h-4/5 w-[25%]  flex flex-col items-start justify-between">
      <div className=" ">
        <Image src={data.img} height="200px" width="300px"></Image>
        <h3 className="mt-4 text-4xl mx-2">{data.heading}</h3>
        <p className="mt-4 text-lg mx-2">{data.text}</p>
      </div>
      <button className="my-6 mx-2 px-4 py-2 bg-primary hover:bg-green-500 ho text-white font-semibold text-base ">
        {data.button}
      </button>
    </div>
  );
};

export default Card;
