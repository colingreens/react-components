import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import classes from "./accordion-item.module.css";

export default function AccordionItem(props) {
  const { number, title, description } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={
        isActive ? `${classes.item} ${classes.open}` : `${classes.item}`
      }
      onClick={() => setIsActive(!isActive)}
    >
      <p className={classes.number}>{number}</p>
      <p className={classes.text}>{title}</p>
      <ChevronDownIcon className={classes.icon} />
      <div className={classes.hiddenBox}>
        <p>{description}</p>
        <ul>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          <li>Ipsam sapiente quia eaque consequuntur iure id eius.</li>
          <li>reiciendis unde laboriosam quae libero quasi molestias.</li>
          <li> vitae consequatur odio quas sint cupiditate.</li>
        </ul>
      </div>
    </div>
  );
}
