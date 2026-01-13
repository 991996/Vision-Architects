import project1 from "@/assets/projects/architecture-5713016_1280.jpg";
import project2 from "@/assets/projects/image 16.png";
import project3 from "@/assets/projects/image 17.png";
import project4 from "@/assets/projects/image 18.png";
import project5 from "@/assets/projects/modern-4428919_1280.jpg";
import MyButton from "@/components/MyButton";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Projects() {
  const projectsList = [
    {
      image: project5,
      title: "Sample Project 1",
      href: "#",
      colSpan: "col-span-2",
    },
    {
      image: project1,
      title: "Sample Project 2",
      href: "#",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      image: project2,
      title: "Sample Project 3",
      href: "#",
      colSpan: "col-span-1",
    },
    {
      image: project3,
      title: "Sample Project 4",
      href: "#",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      image: project4,
      title: "Sample Project 5",
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
      <Link to="/projects" className="self-end">
        <MyButton className="bg-primary-black text-white" text="All projects" />
      </Link>
    </div>
  );
}

function Project({ project }) {
  return (
    <Link
      to="/project-details"
      state={{ project }}
      className={`${project.colSpan} relative h-60 cursor-pointer group`}
    >
      {/* OverLay */}
      <div
        className="w-full h-full absolute inset-0 bg-primary-black/80 z-10
      flex flex-col justify-center gap-2 px-10 text-white
       opacity-0 group-hover:opacity-100 duration-300"
      >
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <button
          className="flex items-center gap-3 cursor-pointer 
       hover:gap-5 duration-300"
        >
          <p className=" uppercase tracking-widest">View more</p>
          <CgArrowLongRight />
        </button>
      </div>
      <img src={project.image} className="w-full h-full object-cover" />
    </Link>
  );
}
