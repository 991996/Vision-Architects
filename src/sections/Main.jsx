import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import main1 from "@/assets/main1.png";

export default function Main() {
  return (
    <div className="flex items-center">
      {/* Text */}
      <div className="flex flex-col w-[40%] gap-20">
        {/* Title */}
        <div className="flex flex-col gap-0">
          <h1 className=" uppercase text-primary-gray text-6xl">project</h1>
          <h1 className=" capitalize text-5xl font-bold">lorum</h1>
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
      <div className="w-[60%] h-screen relative">
        <img
          src={main1}
          alt="project image"
          className="w-full h-full object-cover"
        />
        <div className="flex items-center gap-3 p-6 absolute bottom-0 left-0 bg-white">
          <p className=" uppercase tracking-widest">View Project</p>
          <CgArrowLongRight />
        </div>
      </div>
    </div>
  );
}
