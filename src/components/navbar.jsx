import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const Navlinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/#services" },
    { title: "Packages", path: "/#packages" },
    { title: "Results", path: "/#results" },
    { title: "Scalp Club", path: "/scalpClub" },
  ];

  const mobNavlinks = [
    { title: "Home", path: "/" },
    { title: "Scalp Club", path: "/scalpClub" },
    { title: "About us", path: "/about" },
    { title: "Contact us", path: "/c" },
    { title: "Privacy Policy", path: "/privacyPolicy" },
    { title: "Terms and conditions", path: "/termsAndConditions" },
  ];

  return (
    <div className="w-full bg-background top-0 sticky z-[9999] border-b border-borderColor">
      <nav className="hidden lg:flex w-full h-[4rem] px-20 py-2 items-center justify-between">
        <div className="h-full">
          <Link to={"/"}>
            <img src="/images/logo.png" alt="remesa" className="h-full py-2" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex justify-end space-x-6">
            <>
              {Navlinks.slice(0, 1).map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={`cursor-pointer font-[400] text-[16px] ${
                    activeLink === link.path ? "text-white" : "text-[#4F4F4F]"
                  }`}
                  onClick={() => setActiveLink(link.path)}
                >
                  {link.title}
                </NavLink>
              ))}
              {Navlinks.slice(1, 4).map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  className={`cursor-pointer font-[400] text-[16px] ${
                    activeLink === link.path ? "text-white" : "text-[#4F4F4F]"
                  }`}
                  onClick={() => setActiveLink(link.path)}
                >
                  {link.title}
                </a>
              ))}

              {Navlinks.slice(4).map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={() => setActiveLink(link.path)}
                  className={`cursor-pointer font-[400] text-[16px] ${
                    activeLink === link.path ? "text-white" : "text-[#4F4F4F]"
                  }`}
                >
                  {link.title}
                </NavLink>
              ))}
            </>
          </ul>
          <div className="">
            <Link
              to="https://forms.zohopublic.com.au/BotTradeX/form/ContactUs/formperma/8_vFjmBvnVcHEz6zLFDuOWA_G0nC6pLLErfbfrd5_bs"
              target="_blank"
              className=""
            >
              <button className="text-white bg-primary border-none text-[16px] h-[50px] w-32 rounded-xl transition-all ease-in-out">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <>
        <nav className="flex lg:hidden w-full h-[4rem] md:px-8 px-4 justify-between items-center py-3 bg-background">
          <div className="h-full">
            <Link to={"/"}>
              <img
                src="/images/logo.png"
                alt="remesa"
                className="h-full py-2"
              />
            </Link>
          </div>
          <div className="w-fit" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <div className="flex flex-col">
                <div className="w-8 h-1 bg-white rounded-lg rotate-45 translate-y-1 -translate-x-2"></div>
                <div className="w-8 h-1 bg-white rounded-lg -rotate-45 -translate-x-2"></div>
              </div>
            ) : (
              <div className="w-10 h-6 flex flex-col items-end gap-[6px] cursor-pointer">
                <div className="w-8 h-[2px] bg-white"></div>
                <div className="w-6 h-[2px] bg-white"></div>
                <div className="w-4 h-[2px] bg-white"></div>
              </div>
            )}
          </div>
        </nav>
        {isOpen && (
          <div className="w-full h-[100vh] bg-background z-[99] absolute">
            <ul className="flex flex-col justify-start items-center h-full space-y-6 py-12 font-semibold">
              {mobNavlinks.map((link, index) => (
                <NavLink
                  exact
                  to={link.path}
                  key={index}
                  className={({ isActive }) =>
                    `cursor-pointer font-[400] text-[16px] ${
                      isActive ? "text-white" : "text-[#4F4F4F]"
                    } `
                  }
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {link.title}
                </NavLink>
              ))}
              <Link
                to="https://forms.zohopublic.com.au/BotTradeX/form/ContactUs/formperma/8_vFjmBvnVcHEz6zLFDuOWA_G0nC6pLLErfbfrd5_bs"
                className=""
                target="_blank"
              >
                <button className="text-white bg-primary border-none py-3 px-8 rounded-xl transition-all ease-in-out">
                  Get Started
                </button>
              </Link>
            </ul>
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
