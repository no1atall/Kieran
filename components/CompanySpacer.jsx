import {
  AiOutlineLeft,
  AiOutlineRight,
  AiFillAndroid,
  AiFillApple,
} from "react-icons/ai";

import { SiHp, SiDell, SiLenovo, SiAsus } from "react-icons/si";

const CompanySpacer = () => {
  return (
      //This is an Icon spacer which is used between section transitions.
    
      <div className=" mt-8 flex justify-center text-4xl text-primary">
        {" "}
        <AiOutlineLeft className="text-green-500" />
        <AiFillAndroid className="mx-1" />
        <AiFillApple className="mx-1" />
        <SiDell className="mx-2" />
        <SiHp className="mx-2" />
        <SiLenovo className="mx-2" /> <SiAsus className="mx-2" />
        <AiOutlineRight className="text-green-500" />
      </div>
    
  );
};

export default CompanySpacer;
