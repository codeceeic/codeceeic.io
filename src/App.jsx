import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import heroBackgroundImage from './assets/hero.jpg';
import Search from "./components/search";


const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`bg-blue-900 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`} style={{backgroundImage: `url(${heroBackgroundImage})`, backgroundSize: 'cover'}}>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </section>
    
    <div className={`bg-blue-900 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Search />
        {/* <Stats /> */}
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        {/* <Clients /> */}
        {/* <CTA /> */}
      </div>
    </div>
  </div>
);

export default App;
