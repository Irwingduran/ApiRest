import { Img2 } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={Img2} alt="billing" className="w-[100%] h-[95%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Beneficios <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Eficiencia en el uso del agua: Optimización del riego y reducción del desperdicio de agua. <br />
        Sostenibilidad: Promoción de prácticas agrícolas sostenibles y conservación de recursos hídricos. <br />
        Seguridad y Transparencia: Datos inmutables y transparentes gracias a la tecnología blockchain. <br />
        Adaptación al Cambio Climático: Predicciones climáticas precisas para ajustar las prácticas agrícolas. <br />
        Educación y Concienciación: Capacitación de los agricultores en la gestión y conservación del agua. <br />
      </p>


    </div>
  </section>
);

export default Billing;
