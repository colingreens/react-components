import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import classes from "./pagination.module.css";

export default function Pagination() {
  return (
    <div className={classes.pagination}>
      <button className={`${classes.btn} ${classes["btn--left"]}`}>
        <ChevronLeftIcon className={classes["button-icon"]} />
      </button>
      <a href="#" className={classes["page-link"]}>
        1
      </a>
      <a href="#" className={classes["page-link"]}>
        2
      </a>
      <a
        href="#"
        className={`${classes["page-link"]} ${classes["page-link--current"]}`}
      >
        3
      </a>
      <a href="#" className={classes["page-link"]}>
        4
      </a>
      <a href="#" className={classes["page-link"]}>
        5
      </a>
      <a href="#" className={classes["page-link"]}>
        6
      </a>
      <span className={classes.dots}>...</span>
      <a href="#" className={classes["page-link"]}>
        23
      </a>
      <button className={`${classes.btn} ${classes["btn--right"]}`}>
        <ChevronRightIcon className={classes["button-icon"]} />
      </button>
    </div>
  );
}
