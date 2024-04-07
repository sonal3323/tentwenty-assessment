import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSection.scss";
import Header from "../Header/Header.jsx";
import NextImageIndicator from "./NextImageIndicator.jsx";
import data from "../../utils/BannerSliderData.js";
import { AnimationData } from "../../utils/animationData.js";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const onSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };
  const progressBar = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressBar.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
  };
  
  return (
    <section className="section-hero">
      {/* header component */}
      <Header/>

      {/* banner content */}
      <div className="banner-content">
        <motion.p {...AnimationData.slideUpDelay} className="banner-content__description">Welcome to the Twenty Farms</motion.p>
        <motion.h1 {...AnimationData.slideUpDelay} className="banner-content__title" >
          From Our Farms to your hands
        </motion.h1>
      </div>

      {/* banner slider component */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[Autoplay, Pagination, Navigation, A11y]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={onSlideChange}
        className="banner-swiper"
      >
        {data.map(({ url, title }) => {
          return (
            <SwiperSlide>
              <img src={url} alt={title} />
            </SwiperSlide>
          );
        })}

        {/* autoplay thumbnail indicator with progress bar */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" width="48" height="48" ref={progressBar}>
            <rect x="12" y="12" width="24" height="24"></rect>
          </svg>
          <span ref={progressContent} style={{ display: "none" }}></span>

          {/* thumbnail slider component */}
          <NextImageIndicator currentSlide={currentSlide + 1} />
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSection;
