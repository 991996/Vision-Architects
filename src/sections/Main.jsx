import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import main1 from "@/assets/main1.png";
import MyButton from "@/components/MyButton";

export default function Main() {
  return (
    <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center mt-10 lg:mt-0">
      {/* Text */}
      <div className="flex flex-col w-full md:w-[50%] lg:w-[40%] gap-10 md:gap-20">
        {/* Title */}
        <div className="flex flex-col gap-0">
          <h1 className=" uppercase text-primary-gray text-5xl lg:text-6xl">
            project
          </h1>
          <h1 className=" capitalize text-4xl lg:text-5xl font-bold">lorum</h1>
        </div>
        {/* Arrows */}
        <div className="flex gap-3">
          <div className="bg-light-gray p-2 border cursor-pointer">
            <CgArrowLongLeft className="opacity-70" />
          </div>
          <div className="flex items-center w-full">
            <div className="bg-light-gray p-2 border cursor-pointer">
              <CgArrowLongRight className="opacity-70" />
            </div>
            {/* Line */}
            <div className="w-full h-0.5 bg-light-gray"></div>
          </div>
        </div>
        {/* Numbers */}
        <div className="flex items-center gap-5 text-primary-gray text-xl">
          <div className="flex flex-col">
            <p>0</p>
            <p>1</p>
          </div>
          <div className="bg-primary-gray h-0.5 w-10 -rotate-45"></div>
          <p>02</p>
        </div>
      </div>
      {/* IMAGE */}
      <div className="w-full md:w-[50%] lg:w-[60%] relative">
        <img
          src={main1}
          alt="project image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0">
          <MyButton text="View Project" />
        </div>
      </div>
    </div>
  );
}
