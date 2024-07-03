import { Img1 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Titulo titulo: <br className="sm:block hidden" /> texto texto texto
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo officia nemo odio, vero alias eligendi hic unde quam ullam veniam temporibus quis delectus, incidunt soluta deserunt numquam quos dicta. Molestias.
      </p>

    </div>

    <div className={layout.sectionImg}>
      <img src={Img1} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
