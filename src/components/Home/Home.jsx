import "./Home.css";
import { motion as Motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <Motion.div
      id="home"
      className="relative flex flex-col justify-center 
      items-center text-white min-h-screen px-4 text-center 
      scroll-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1, delay: 0.2 }}
      style={{
        backgroundImage: "url('/assets/homebg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
   
      <div className="absolute inset-0 bg-black/50"></div>

  
      <div className="relative z-10 flex flex-col items-center">
    
        <Motion.div
          className="flex"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-primary">
            Hi, I'm Win Win Htet
          </h1>
        </Motion.div>


        <Motion.div
          className="flex flex-col items-center mt-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            A <span className="text-secondary">Frontend Developer</span> who loves
            building clean and modern web apps.
          </p>
        </Motion.div>

 
        <Motion.div
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/projects">
            <Motion.button
              whileHover={{ backgroundColor: "rgb(15, 15, 15)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="bg-secondary flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm sm:text-base md:text-lg text-white shadow-md w-full sm:w-auto"
            >
              <span>View Projects</span>
              <FaArrowRight />
            </Motion.button>
          </Link>

       <HashLink smooth to="/#contact">
                  <Motion.button
            whileHover={{ backgroundColor: "rgb(15, 15, 15)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-secondary flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm sm:text-base md:text-lg text-white shadow-md w-full sm:w-auto"
          >
            <span>Contact Me</span>
            <FaArrowRight />
          </Motion.button>
       </HashLink>


        </Motion.div>
      </div>
    </Motion.div>
  );
};

export default Home;
