import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { name: "Education", link: "/education" },
    { name: "Fun Facts", link: "/funfacts" },
    
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="uppercase font-bold text-lg text-[#FFA62B]">
          Portfolio
        </h1>

        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                className="text-[15px] uppercase hover:text-[#FFA62B] transition-colors duration-300 font-bold text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-gray-900">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  onClick={() => setShowMenu(false)}
                  className="block uppercase text-gray-200 hover:text-[#FFA62B] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
