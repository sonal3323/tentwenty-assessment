import React from "react";
import "./ImageSlider.scss";
import DragSlider from "./DragSlider.jsx";
import { AnimationData } from "../../utils/animationData.js";
import { motion } from "framer-motion";

const ImageSlider = () => {
  return (
    <section className="section-image-slider">
      <div
        className="section-content"
      >
        {/* slide up animation effect */}
        <motion.h2 {...AnimationData.slideUpDelay} className="section-content__title">Quality Products</motion.h2>
        <motion.p {...AnimationData.slideUpDelay} className="section-content__description" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>
      </div>

      {/* slider component */}
      <DragSlider />
    </section>
  );
};
export default ImageSlider;
