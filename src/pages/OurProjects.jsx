import MyButton from "@/components/MyButton";
import MyLabel from "@/components/MyLabel";
import MyNumbers from "@/components/MyNumbers";
import { ourProjectsList } from "@/data/Data";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/grid";

export default function OurProjects() {
  const swiperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="mt-10 lg:mt-20 flex flex-col gap-6">
      <MyLabel label1="our" label2="projects" />
      <hr />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setCurrentPage(swiper.snapIndex + 1);
        }}
        slidesPerView={1}
        grid={{ rows: 3, fill: "row" }}
        spaceBetween={50}
        modules={[Grid]}
      >
        {ourProjectsList.map((project, index) => (
          <SwiperSlide key={index}>
            <Project project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-10 items-center">
        {/* Numbers */}

        <MyNumbers number1={currentPage} number2={2} />

        {/* Arrows */}
        <div className="flex gap-5 h-fit">
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-light-gray p-3 border cursor-pointer"
          >
            <CgArrowLongLeft className="opacity-70" />
          </div>

          <div
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-light-gray p-3 border cursor-pointer"
          >
            <CgArrowLongRight className="opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Project({ project }) {
  return (
    <Link to="/project-details" state={{ project }}>
      <div className="flex flex-col md:flex-row gap-0 md:h-85">
        <div className="h-full w-full md:w-[45%] lg:w-[55%]">
          <img
            src={project.image}
            alt="Project Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-full md:w-[55%] lg:w-[45%] 
      flex flex-col justify-between bg-light-gray p-6 gap-3 md:gap-0"
        >
          <h1 className="text-primary-gray text-2xl capitalize">
            {project.title}
          </h1>
          <p>{project.text}</p>
          <MyButton text="View more" />
        </div>
      </div>
    </Link>
  );
}
