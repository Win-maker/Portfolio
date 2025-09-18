import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

const projects = [
  {
    title: "Job Portal With Job Alert And Recommendation System",
    description: "A full-stack job portal with authentication, job posts, and recommendations.",
    image: "../assets/jobportal.jpg",
    tech: ["Flask", "Javascript", "SQL", "Bootstrap"],
    link: "https://github.com/Win-maker/Job_Alert_And_Recommendation_System"
  },
  {
    title: "IBank",
    description: "A backbone setup to start react project IBank",
    image: "../assets/ecommerce.jpg",
    tech: ["React", "Typescript", "Tailwind CSS"],
    link: "https://github.com/Win-maker/IBank"
  },
  {
    title: "PhotoGram (Project In Progress)",
    description: "My personal portfolio built with React and Tailwind.",
    image: "../assets/photogram.jpg",
    tech: ["React","Typescript","Firebase", "Tailwind CSS"],
    link: "https://github.com/Win-maker/PhotoGram"
  }
];

const Projects = () => {
  return (
    <section 
     id="projects"
    className="pt-25 min-h-screen relative backdrop-blur-lg bg-white/10 rounded-2xl shadow-lg border border-white/20">
      <div className="container mx-auto px-4">

        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
           className="text-3xl md:text-5xl font-bold mb-12 text-center
                   bg-gradient-to-r from-[#363b38] via-[#ffa62b] to-[#2b2020]
                   bg-clip-text text-transparent"
        >
          My Projects
        </Motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
