import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [openMobileMenu, setOpenMObileMenu] = useState(false);
  const handelMobileMenu = () => {
    setOpenMObileMenu((prev) => !prev);
  };
  const navBar = [
    { title: "Home", path: "/" },
    { title: "Contact", path: "/contact" },
    { title: "About", path: "/about" },
    { title: "Signup", path: "/signup" },
  ];

  return (
    <>
      <div className="sticky top-0 z-50 ">
        <h2 className="flex items-center text-center justify-center h-[48px] bg-black text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          Shop Now in English
        </h2>

        <nav className=" px-2 lg:px-[10%] bg-white">
          <div className="flex pt-8 pb-2 items-center   justify-between ">
            <div>
              <h1 className="text-3xl font-bold">Exclusive</h1>
            </div>

            <div className="md:flex gap-4 list-none hidden">
              <ul className="flex gap-8">
                {navBar.map((navItem) => (
                  <li key={navItem.path} className="relative text-[16px]">
                    <NavLink
                      to={navItem.path}
                      className={({ isActive }) =>
                        `relative pb-2 group ${
                          isActive
                            ? "text-black font-bold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black"
                            : "text-gray-600"
                        }`
                      }
                    >
                      {navItem.title}

                      <span className="absolute left-0 bottom-0 h-[2px] bg-gray-400 transition-all w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex   items-center gap-4 lg:gap-8">
              <div className="hidden lg:block">
                <input
                  type="search"
                  className=" p-2 px-8 bg-gray-200 rounded-md md:w-[300px]"
                  placeholder="What are u Searching For? "
                />
              </div>
              <div>
                <img src="src/assets/Wishlist.png" alt="Wishlist Icon" />
              </div>
              <div>
                <img src="src/assets/Cart1 with buy.jpg" alt="Cart Icon" />
              </div>
              <div className="block md:hidden " onClick={handelMobileMenu}>
                <FiAlignLeft size={30} />
                {openMobileMenu && (
                  <div className="fixed inset-0 bg-black opacity-40 transition-opacity duration-300  "></div>
                )}
                <div
                  className={`fixed  right-0 w-[250px] h-full bg-gray-300 shadow-lg p-6 transform transition-transform z-50 md:hidden ${
                    openMobileMenu ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="flex w-full justify-center pt-4 gap-4 list-none ">
                    <ul className="flex flex-col items-center justify-center w-full ">
                      {navBar.map((navItem) => (
                        <li
                          key={navItem.path}
                          className="relative py-2 text-[16px]"
                        >
                          <NavLink
                            to={navItem.path}
                            className={({ isActive }) =>
                              `relative pb-2 group ${
                                isActive
                                  ? "text-black font-bold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black"
                                  : "text-black"
                              }`
                            }
                          >
                            {navItem.title}

                            <span className="absolute left-0 bottom-0 h-[2px] bg-gray-400 transition-all w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <hr className="text-gray-200" />
      </div>
    </>
  );
};

export default Navbar;
