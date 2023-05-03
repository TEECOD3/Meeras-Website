import PageContainer from "./PageContainer";
import MerrasLogo from "../pages/Home/Icons/MeerasLogo";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { Button } from "../Components/UI/Button";
import { NavLink } from "react-router-dom";
import merraslog from "../pages/Home/images/Meeraslogo.png";
import { AnimatePresence } from "framer-motion";
import MobileNav from "../Components/UI/Mobilenav";

const NavBar = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    setModalOpen(!ModalOpen);
  };

  const hidemodalHandler = () => {
    setModalOpen(false);
  };
  return (
    <>
      <AnimatePresence>
        {ModalOpen && <MobileNav hideModalHandler={hidemodalHandler} />}
      </AnimatePresence>

      <nav className="">
        <div className="fixed z-50 w-full backdrop-blur-md bg-white/20  mx-auto max-lg:w-full ">
          <div className="h-[4rem] w-[90%] flex justify-between items-center px-2 md:px-4 sm:h-[5rem]  sm:max-w-[84%] mx-auto">
            <NavLink to="/" className="">
              <img
                src={merraslog}
                alt="meeras logo"
                className="h-10 w-10 md:w-full md:h-full"
              />
            </NavLink>
            <ul className="flex justify-around sm:w-[80%]  md:w-[60%] lg:w-[70%] xl:w-[50%] font-medium items-center gap-2 max-lg:hidden capitalize max-lg:w-[70%]  ">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-5 font-bold  text-orange-700  border-b-orange-600 border-b-4 transition-all delay-75 ease-in"
                    : ""
                }
              >
                <li className="mb-1">about</li>
              </NavLink>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-5 font-bold  text-orange-700  border-b-orange-600 border-b-4 transition-all delay-75 ease-in"
                    : ""
                }
              >
                <li className="mb-1">product</li>
              </NavLink>

              <NavLink
                to="/readmore"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-5 font-bold  text-orange-700  border-b-orange-600 border-b-4 transition-all delay-75 ease-in"
                    : ""
                }
              >
                <li className="mb-1">portfolio</li>
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-5 font-bold  text-orange-700  border-b-orange-600 border-b-4 transition-all delay-75 ease-in"
                    : ""
                }
              >
                <li className="mb-1">blog</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-5 font-bold  text-orange-700  border-b-orange-600 border-b-4 transition-all delay-75 ease-in "
                    : ""
                }
              >
                <li className="mb-1">contact</li>
              </NavLink>
              <li>
                <Button
                  variants="default"
                  className="py-4 px-10 max-lg:py-2  rounded-[0.5rem] cursor-pointer text-[1rem] max-lg:text-[0.7rem] max-xl:text-sm "
                >
                  Contact Us
                </Button>
              </li>
            </ul>

            <MdOutlineMenu
              className="lg:hidden text-4xl cursor-pointer "
              onClick={openModalHandler}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
