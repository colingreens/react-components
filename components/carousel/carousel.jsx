import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import classes from "./carousel.module.css";

export default function Carousel() {
  return (
    <div className={classes.carousel}>
      <img src="/maria.jpg" alt="Maria de Almedia" />
      <blockquote>
        <p className={classes["testimonial-text"]}>
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi harum
          quibusdam odit, distinctio animi recusandae eveniet natus voluptas eum
          voluptatibus deserunt."
        </p>
        <p className={classes["testimonial-author"]}>Maria de Almedia</p>
        <p className={classes["testimonial-job"]}>
          Senior Product Manager at EDP Comercial
        </p>
      </blockquote>
      <button className={`${classes.btn} ${classes["btn--left"]}`}>
        <ChevronLeftIcon className={classes["btn-icon"]} />
      </button>
      <button className={`${classes.btn} ${classes["btn--right"]}`}>
        <ChevronRightIcon className={classes["btn-icon"]} />
      </button>
      <div className={classes.dots}>
        <button className={`${classes.dot} ${classes["dot--filled"]}`}>
          &nbsp;
        </button>
        <button className={classes.dot}>&nbsp;</button>
        <button className={classes.dot}>&nbsp;</button>
        <button className={classes.dot}>&nbsp;</button>
      </div>
    </div>
  );
}
