import {
  AiOutlineLeft,
  AiOutlineRight,
  AiFillAndroid,
  AiFillApple,
} from "react-icons/ai";

import { BsCodeSlash } from "react-icons/bs";
import { SiHp, SiDell, SiLenovo, SiAsus } from "react-icons/si";

const CompanySpacer = () => {
  return (
      //This is an Icon spacer which is used between section transitions.
    
      <div className=" my-20 flex justify-center text-4xl text-primary">
        {" "}
        <BsCodeSlash className="text-green-500" />
        <AiFillAndroid className="mx-1" />
        <AiFillApple className="mx-1" />
        <SiDell className="mx-2" />
        <SiHp className="mx-2" />
        <SiLenovo className="mx-2" /> <SiAsus className="mx-2" />
        <BsCodeSlash className="text-green-500" />
      </div>
    
  );
};

export default CompanySpacer;
