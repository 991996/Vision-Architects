import about1 from "@/assets/about/Rectangle 8.png";
import about2 from "@/assets/about/Rectangle 9.png";
import about3 from "@/assets/about/Rectangle 10.png";
import { CgArrowLongRight } from "react-icons/cg";

export default function About() {
  return (
    <div
      className="bg-light-gray flex flex-col-reverse lg:flex-row 
    gap-5 lg:gap-7 px-4 sm:px-6 md:px-10 xl:px-25 py-6"
    >
      <div className="relative flex gap-7">
        <div className="w-[50%] h-[70%]">
          <img src={about1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[50%] mt-8">
          <img src={about2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[48%] absolute -bottom-[15%] left-0">
          <img src={about3} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Text */}
      <div
        className="flex flex-col justify-between gap-3 xl:gap-0
       w-full lg:w-[40%] py-2"
      >
        <h1 className="text-primary-gray text-6xl">About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cum
          modi esse tempore, dolor, eligendi ab corrupti provident ullam
          inventore reprehenderit dignissimos magni? Sed fugit cupiditate omnis
          quisquam itaque ab voluptates repudiandae ad pariatur placeat?
          Aspernatur aut nostrum impedit blanditiis.
        </p>
        <button className="flex items-center gap-3 p-6 self-start bg-white cursor-pointer">
          <p className=" uppercase tracking-widest">Read More</p>
          <CgArrowLongRight />
        </button>
      </div>
    </div>
  );
}
