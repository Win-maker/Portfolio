import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Education", href: "/#education" },
    { label: "Experiences", href: "/#experiences" },
    { label: "Contact Me", href: "/#contact" },
  ];

    const handleClick = (href) => {

    setActiveSection(href);
    setIsOpen(false); 
  };



  return (
    <div className="w-full bg-primary text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
 
        <div className="text-xl font-bold">MyPortfolio</div>

    
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
  href={item.href}
  onClick={() => handleClick(item.href)}
  className="block transition"
>
  {activeSection === item.href ? (
    <Motion.span
      initial={{ scale: 1 }}
      animate={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="font-bold underline underline-offset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient animate-glitter"
    >
      {item.label}
    </Motion.span>
  ) : (
    <span className="hover:text-gray-200">{item.label}</span>
  )}
</a>
           
            </li>
          ))}
        </ul>


        <div className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-[#6366F1]"/> : <FaBars className="text-[#6366F1]"/>}
        </div>
      </div>


      <div
        className={`md:hidden bg-primary px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-base font-medium">
                   {navItems.map((item, idx) => (
            <li key={idx}>
              <a
  href={item.href}
  onClick={() => handleClick(item.href)}
  className="block transition"
>
  {activeSection === item.href ? (
    <Motion.span
      initial={{ scale: 1 }}
      animate={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="font-bold underline underline-offset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient animate-glitter"
    >
      {item.label}
    </Motion.span>
  ) : (
    <span className="hover:text-gray-200">{item.label}</span>
  )}
</a>
           
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
