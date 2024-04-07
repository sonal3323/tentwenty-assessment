import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../utils/BannerSliderData.js";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./NextImageIndicator.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const NextImageIndicator = ({ currentSlide }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        initialSlide={currentSlide}
        className="image-indicator-swiper"
      >
        {data.map(({ url, title }) => {
          return (
            <SwiperSlide>
              <img src={url} alt={title}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default NextImageIndicator;
