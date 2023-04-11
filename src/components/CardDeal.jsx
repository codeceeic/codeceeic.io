import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import doctor2 from "../assets/doctor2.png";


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Medical and Wellness Social Networking
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We provide patients with access to a social networking platform focused on medical and wellness topics related to complex diseases.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={doctor2} alt="billing" className="w-[100%] h-[100%] rounded-full" />
    </div>
  </section>
);

export default CardDeal;
