import project1 from "@/assets/projects/image 15.png";
import project2 from "@/assets/projects/image 16.png";
import project3 from "@/assets/projects/image 17.png";
import project4 from "@/assets/projects/image 18.png";
import project5 from "@/assets/projects/Rectangle 12.png";
import MyButton from "@/components/MyButton";
import { CgArrowLongRight } from "react-icons/cg";

export default function Projects() {
  const projectsList = [
    {
      image: project5,
      name: "Sample Project",
      href: "#",
      colSpan: "col-span-2",
    },
    {
      image: project1,
      name: "Sample Project",
      href: "#",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      image: project2,
      name: "Sample Project",
      href: "#",
      colSpan: "col-span-1",
    },
    {
      image: project3,
      name: "Sample Project",
      href: "#",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      image: project4,
      name: "Sample Project",
      href: "#",
      colSpan: "col-span-1",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-primary-gray text-5xl lg:text-6xl">Our Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-5">
        {projectsList.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
      <div className="self-end">
        <MyButton className="bg-primary-black text-white" text="All projects" />
      </div>
    </div>
  );
}

function Project({ project }) {
  return (
    <div className={`${project.colSpan} relative h-60 cursor-pointer group`}>
      {/* OverLay */}
      <div
        className="w-full h-full absolute inset-0 bg-primary-black/80 z-10
      flex flex-col justify-center gap-2 pl-10 text-white
       opacity-0 group-hover:opacity-100 duration-300"
      >
        <h1 className="text-4xl font-bold">{project.name}</h1>
        <button
          className="flex items-center gap-3 cursor-pointer 
       hover:gap-5 duration-300"
        >
          <p className=" uppercase tracking-widest">View more</p>
          <CgArrowLongRight />
        </button>
      </div>
      <img src={project.image} className="w-full h-full object-cover" />
    </div>
  );
}
