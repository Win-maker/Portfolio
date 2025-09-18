import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const photos: string[] = [
  "/assets/education/utycc.jpg",
  "/assets/education/ycc.jpg",
  "/assets/education/ycc1.jpg",
  "/assets/education/ycc2.jpg",
  "/assets/education/ycc3.jpg",
  "/assets/education/ycc4.jpg",
];

const Education = () => {
  return (
    <section 
     id="education"
    className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-primary"></div>

      <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        <CircularCarousel photos={photos} />
        <MotionDescription />
      </div>
    </section>
  );
};

const CircularCarousel = ({ photos }: { photos: string[] }) => {
  const [angle, setAngle] = useState(0);
  const [dimensions, setDimensions] = useState({ radius: 240, center: 300, imgSize: 160 });

  // Update dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ radius: 120, center: 140, imgSize: 80 }); // mobile
      } else {
        setDimensions({ radius: 240, center: 300, imgSize: 160 }); // desktop
      }
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Rotate carousel
  useEffect(() => {
    const interval = setInterval(() => setAngle((prev) => prev + 0.3), 30);
    return () => clearInterval(interval);
  }, []);

  const { radius, center, imgSize } = dimensions;

  return (
    <motion.div
      className="relative"
      style={{ width: center * 2, height: center * 2 }}
    >
      {photos.map((photo, i) => {
        const theta = (i / photos.length) * 2 * Math.PI + (angle * Math.PI) / 180;
        const x = center + radius * Math.cos(theta) - imgSize / 2;
        const y = center + radius * Math.sin(theta) - imgSize / 2;

        return (
          <motion.img
            key={i}
            src={photo}
            alt={`Photo ${i}`}
            className="rounded-full object-cover border-4 border-white shadow-2xl"
            style={{ position: "absolute", left: x, top: y, width: imgSize, height: imgSize }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        );
      })}
    </motion.div>
  );
};

const MotionDescription = () => {
  return (
    <motion.div
      className="text-white max-w-lg mt-12 md:mt-0 text-center md:text-left mx-auto"
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, type: "spring", stiffness: 70 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
        My Education
      </h2>
      <p className="text-sm md:text-base text-gray-300 mb-3">
        I graduated in <span className="font-semibold text-white">2025</span> from the
        <span className="font-semibold text-white"> University of Technology (Yatanarpon Cyber City)</span>, 
        Myanmar, with a Bachelor of Engineering in 
        <span className="font-semibold text-white"> Information Science & Technology</span>.
      </p>
      <p className="text-sm md:text-base text-gray-300 mb-3">
        UTYCC is one of Myanmar’s leading technological universities, located near Pyin Oo Lwin. 
        It emphasizes innovation, research, and international collaboration — including ASEAN-Korea Cyber 
        University projects and double-degree programs with universities in Japan.
      </p>
      <p className="text-sm md:text-base text-gray-300">
        During my studies, I gained strong foundations in software development, system design, 
        and problem-solving, alongside hands-on project experience. This journey not only shaped my 
        technical skills but also strengthened my ability to adapt and grow in the rapidly evolving 
        tech world.
      </p>
    </motion.div>
  );
};

export default Education;
