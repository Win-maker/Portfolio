import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Programmer",
    company: "Thetys Co.td",
    duration: "Sept 2024 - Present",
    description:
      "Developed responsive web apps using React, Tailwind CSS, and API integrations with C# Dotnet.",
  },
  {
    role: "Intern - Web Developer",
    company: "National Cyber City",
    duration: "March 2022 - May 2022",
    description:
      "Create Cycle Tickets App With Flask, PostgreSql and OCR (Feature of Machine Learning)",
  },
  {
    role: "Intern - QA Tester",
    company: "Quly Myanmar",
    duration: "March 2023 - May 2023",
    description: "Testing Japan National's Websites",
  },
];


const cardColors = [
  "bg-primary text-white",  
  "bg-secondary text-black", 
  "bg-third text-white",     
];

const Experience = () => {
  return (
    <section
      id="experiences"
      className="relative w-full flex flex-col items-center justify-center py-16 bg-gray-50"
    >

      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl md:text-5xl font-bold mb-12 text-center
                   bg-gradient-to-r from-[#363b38] via-[#ffa62b] to-[#2b2020]
                   bg-clip-text text-transparent"
      >
        Working & Internship Experiences
      </motion.h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full px-4 sm:px-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full sm:w-auto px-4 py-4 rounded-2xl shadow-lg border border-gray-200 ${cardColors[index % cardColors.length]}`}
          >
            <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
            <p className="font-medium mb-1">{exp.company}</p>
            <p className="text-sm mb-3">{exp.duration}</p>
            <p className="text-base">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
