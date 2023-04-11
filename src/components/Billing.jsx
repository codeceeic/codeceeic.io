import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import doctor1 from "../assets/doctor1.png";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={doctor1} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-full" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Medical and Wellness  <br className="sm:block hidden" /> Provider Lookup
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our platform allows patients to easily search for and connect with healthcare providers who specialize in treating complex diseases.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
