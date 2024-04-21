import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app sticky top-0 z-50 bg-black text-white">
      <nav>
        <div className="max-w-7xl mx-auto px-auto">
          <div className="flex items-center justify-between w-auto gap-32 mx-8 py-8">
            {/* logo */}
            <div className="flex items-center">
              <Link to="/" className="flex gap-1 font-bold items-center ">
                <img
                  className="max-[350px]:h-5 h-9"
                  src="/Images/Logo.jpg"
                  alt="logo"
                />
                <span>BCG</span>
              </Link>
            </div>
            {/* primary menu */}
            <div className="hidden md:flex gap-4 md:gap-16">
              <Link to="/">HOME</Link>
              <Link to="Services">SERVICES</Link>
              <Link to="About">ABOUT</Link>
              <Link to="Contact">CONTACT US</Link>
            </div>
            {/* Book Consulting Button */}
            <div className="hidden md:flex gap-8">
              <button className="bg-[#e0aa3e] px-4 py-2 rounded-sm">
                BOOK A CONSLUTATION
              </button>
            </div>
            {/* Mobile navigation toggle (adjusted) */}
            <div className="flex md:hidden items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? (
                  <FaXmark className="h-6 duration-300" />
                ) : (
                  <FaBars className="h-6 duration-300" />
                )}
              </button>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            {/* ... (rest of your secondary navigation code) */}
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-black text-white overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <Link to="#" className="border-l-4 border-[#e0aa3e] px-4">
                HOME
              </Link>
              <Link to="Services">SERVICES</Link>
              <Link to="About">ABOUT</Link>
              <Link to="Contact">CONTACT US</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
