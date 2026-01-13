import MyLabel from "@/components/MyLabel";
import gallery1 from "@/assets/gallery/Rectangle 23.png";
import gallery2 from "@/assets/gallery/Rectangle 24.png";
import gallery3 from "@/assets/gallery/Rectangle 25.png";
import gallery4 from "@/assets/gallery/Rectangle 26.png";
import gallery5 from "@/assets/gallery/Rectangle 27.png";
import gallery6 from "@/assets/gallery/Rectangle 28.png";
import gallery7 from "@/assets/gallery/Rectangle 29.png";
import gallery8 from "@/assets/gallery/Rectangle 30.png";
import gallery9 from "@/assets/gallery/Rectangle 31.png";
import gallery10 from "@/assets/gallery/image 34.png";
import MyNumbers from "@/components/MyNumbers";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/grid";

const gallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery5,
  gallery3,
  gallery1,
  gallery10,
];

export default function Gallery() {
  const swiperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  // إعدادات الديسكتوب (للحساب)
  let slidesPerView = 5;
  let rows = 2;
  const totalPagesD = Math.ceil(gallery.length / (slidesPerView * rows) + 1);
  // إعدادات التابلت
  slidesPerView = 3;
  rows = 3;
  const totalPagesT = Math.ceil(gallery.length / (slidesPerView * rows) + 1);
  // إعدادات الموبايل
  slidesPerView = 2;
  const totalPagesM = Math.ceil(gallery.length / (slidesPerView * rows) + 1);

  return (
    <div className="mt-10 lg:mt-20 flex flex-col gap-6">
      <MyLabel label1="photo" label2="gallery" />
      <hr />

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setCurrentPage(swiper.snapIndex + 1);
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            grid: { rows: 3, fill: "row" },
          },
          768: {
            slidesPerView: 3,
            grid: { rows: 3, fill: "row" },
          },
          1024: {
            slidesPerView: 5,
            grid: { rows: 2, fill: "row" },
          },
        }}
        spaceBetween={12}
        modules={[Grid]}
      >
        {gallery.map((g, index) => (
          <SwiperSlide key={index}>
            <img src={g} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-10 items-center">
        {/* Numbers */}
        <div className=" hidden lg:block">
          <MyNumbers number1={currentPage} number2={totalPagesD} />
        </div>
        <div className=" hidden md:block lg:hidden">
          <MyNumbers number1={currentPage} number2={totalPagesT} />
        </div>
        <div className=" md:hidden">
          <MyNumbers number1={currentPage} number2={totalPagesM} />
        </div>

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
