import AccordionItem from "./accordion-item";
import classes from "./accordion-01.module.css";

export default function Accordion(props) {
  const { items } = props;

  return (
    <div className={classes.accordion}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          number={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
