import classes from "./slider.module.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./slider-images";

export default function Slider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className={classes.carousel}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={classes["inner-carousel"]}
      >
        {images.map((image) => {
          return (
            <motion.div className={classes.item}>
              <img key={image} src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
