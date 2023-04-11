import { stats } from "../constants";
import styles from "../style";


const Search = () => (
  <section className={`${styles.flexCenter} bg-blue-100 rounded-3xl flex-col justify-center text-center -mt-24 w-11/12 flex-wrap mx-auto sm:mb-20 mb-6 gap-2`}>
    <div className="font-bold text-[24px] mt-12">Find Health and Wellness Providers</div>
    <div>Search more than doctors, nutritionists, fitness instructors, etc. by specialty, condition, treatment, or name and schedule an appointment online</div>
    <div className="w-5/6 h-12 mb-12 relative">
        <input type="text" className="rounded-3xl pl-5 border border-black w-full h-full bg-gray-100"></input>
        <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <p>Search</p>
        </div>
    </div>
  </section>
);

export default Search;
