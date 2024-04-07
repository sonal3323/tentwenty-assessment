import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./DragSlider.scss";
import data from "../utils/ImageSliderData";
import { AnimationData } from "../utils/animationData.js";
import { motion } from "framer-motion";

const DragSlider = () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={80}
        grabCursor={true}
        centeredSlides={true}
        // breakpoints={
        //   {
        //     768: {
        //       spaceBetween: 20,
        //     },  
        //   }
        // }
        className="drag-swipper"
        slidesPerView={3} // Set the number of slides to view
      >
        {data.map(({ url, title, description }) => {
          return (
            <SwiperSlide>
              <div className="slide-image">
                <img src={url} alt={title} />
              </div>
              <div className="slide-content">
                <motion.h3 {...AnimationData.slideUpDelay} className="slide-content__title" >{title}</motion.h3>
                <motion.p {...AnimationData.slideUpDelay} className="slide-content__sub-title">{description}</motion.p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default DragSlider;