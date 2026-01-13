import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import main1 from "@/assets/main1.png";
import main2 from "@/assets/main2.jpg";
import MyButton from "@/components/MyButton";
import MyLabel from "@/components/MyLabel";
import MyNumbers from "@/components/MyNumbers";
import { Link } from "react-router-dom";
import { useState } from "react";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const projects = [
    {
      title: "Urban Vision",
      image: main1,
    },
    {
      title: "Stone Horizon",
      image: main2,
    },
  ];
  const [currentProject, setCurrentProject] = useState(1);
  return (
    <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center mt-10 lg:mt-0">
      {/* Text */}
      <div className="flex flex-col w-full md:w-[50%] lg:w-[40%] gap-10 md:gap-20">
        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <MyLabel
              label1={projects[currentProject - 1].title.split(" ")[0]}
              label2={projects[currentProject - 1].title
                .split(" ")
                .slice(1)
                .join(" ")}
            />
          </motion.div>
        </AnimatePresence>
        {/* Arrows */}
        <div className="flex gap-3">
          <div
            className="bg-light-gray p-2 border cursor-pointer"
            onClick={() =>
              currentProject > 1 ? setCurrentProject((prev) => prev - 1) : null
            }
          >
            <CgArrowLongLeft className="opacity-70" />
          </div>
          <div className="flex items-center w-full">
            <div
              className="bg-light-gray p-2 border cursor-pointer"
              onClick={() =>
                currentProject < projects.length
                  ? setCurrentProject((prev) => prev + 1)
                  : null
              }
            >
              <CgArrowLongRight className="opacity-70" />
            </div>
            {/* Line */}
            <div className="w-full h-0.5 bg-light-gray"></div>
          </div>
        </div>
        {/* Numbers */}
        <MyNumbers number1={currentProject} number2={2} />
      </div>
      {/* IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full md:w-[50%] lg:w-[60%] relative h-100 md:h-120 lg:h-180"
        >
          <img
            src={projects[currentProject - 1].image}
            alt="project image"
            className="w-full h-full object-cover"
          />
          <Link
            to="/project-details"
            state={{ project: projects[currentProject - 1] }}
            className="absolute bottom-0 left-0"
          >
            <MyButton text="View Project" />
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
