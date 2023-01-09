import classes from "./hero.module.css";

export default function hero() {
  return (
    <body>
      <header>
        <nav className={classes.container}>
          <div>LOGO</div>
          <div>NAVIGATION</div>
        </nav>
        <div className={classes["header-container"]}>
          <div className={classes["header-container-inner"]}>
            <h1>A healthy meal delivered to your door, every single day</h1>
            <p>
              The smart 365-days-per-year food subscription that will make you
              eat healthy. Tailored to your personal tastes and nutritional
              needs
            </p>
            <a href="#" class={classes.btn}>
              Start eating well
            </a>
          </div>
        </div>
      </header>

      <section>
        <div className={classes.container}>
          <h2>Some random heading</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            tempore voluptate vel debitis aperiam officiis blanditiis. Aut in et
            consectetur ea ducimus delectus a quae nesciunt praesentium.
            Consectetur, labore ipsa!
          </p>
        </div>
      </section>
    </body>
  );
}
