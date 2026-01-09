import { CgArrowLongRight } from "react-icons/cg";

export default function MyButton({ className = "bg-white", text }) {
  return (
    <button
      className={`flex items-center gap-3 pl-6 pr-6 py-6 self-start cursor-pointer 
      hover:pr-4 hover:gap-5 duration-300 ${className}`}
    >
      <p className=" uppercase tracking-widest">{text}</p>
      <CgArrowLongRight />
    </button>
  );
}
