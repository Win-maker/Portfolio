import { motion as Motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 80 },
  { name: "Vue.js", level: 70 },
  { name: "Tanstack Query", level: 60 },
  { name: "C# .NET", level: 60 },
  { name: "Python Flask", level: 60 },
  { name: "SQL Server Management", level: 75 },
  { name: "PostgreSQL", level: 60 }
];

const About = () => {
  return (
    <Motion.div
    id="about"
      className="flex flex-col md:flex-row w-full h-auto mx-auto py-10 md:py-16 px-6 md:px-12 
      backdrop-blur-lg bg-gray-50 rounded-2xl shadow-lg border border-white/20 
      overflow-y-auto scroll-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5 }}
    >
      <Motion.div
        className="w-full md:w-[40%] flex justify-center items-center mb-8 md:mb-0"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 70 }}
      >
        <img
          src="/assets/profile.jpg"
          alt="My profile"
          className="rounded-2xl shadow-lg w-3/4 md:w-4/5 h-auto object-cover"
        />
      </Motion.div>


      <Motion.div
        className="w-full md:w-[50%] flex flex-col items-start md:my-auto md:ml-10 space-y-6"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 70 }}
      >
        <div className="text-primary font-bold text-sm md:text-lg uppercase">
          About Me
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Passionate Developer
        </h2>

        <p className="text-sm md:text-md leading-relaxed text-black">
          I’m a web developer with experience in frontend and backend
          technologies. I enjoy creating clean, interactive applications using
          modern frameworks. My skills range from React.js and Vue.js on the
          frontend to C# .NET, Flask, and database management with SQL Server
          and PostgreSQL.
        </p>


        <div className="w-full md:w-[80%] mt-6 space-y-6">
          {skills.map((skill, i) => (
            <div key={i} className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-900 font-semibold flex items-center gap-2 text-sm md:text-base">
                  {skill.icon && (
                    <img src={skill.icon} className="w-5 h-5" alt="" />
                  )}
                  {skill.name}
                </span>
                <Motion.span
                  className="text-gray-700 font-medium text-xs md:text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                >
                  {skill.level}%
                </Motion.span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 md:h-4 overflow-hidden shadow-inner">
                <Motion.div
                  className="h-full rounded-full shadow-md"
                  style={{
                    background:
                      "linear-gradient(to right, #6366F1, #3B82F6)"
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    type: "spring",
                    stiffness: 60
                  }}
                />
              </div>
            </div>
          ))}
        </div>

 
       <a href="/assets/cv/Win Win Htet (Web Developer CV).pdf" download="Win Win Htet (Web Developer CV).pdf">
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-primary text-white px-5 md:px-6 py-2 md:py-3 rounded-lg font-semibold shadow-md text-sm md:text-base"
          >
            Download Resume
          </Motion.button>
        </a>
      </Motion.div>
    </Motion.div>
  );
};

export default About;
