"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Windows",
    path: "#windows",
  },
  {
    title: "Doors",
    path: "#Doors",
  },
  {
    title: "Projects",
    path: "#Projects",
  },
  {
    title: "Testimonials",
    path: "#Testimonials",
  },
  {
    title: "About",
    path: "#About",
  },
  {
    title: "Contact",
    path: "#Contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    
    <nav className="fixed mx-auto border border-[#000000] top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-100">
      <div className="bg-blue-500 h-2 w-full"></div>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 w-container">
      <img src="https://drive.google.com/uc?export=view&id=1DydJkmBK6PQUAaohBzNMYEqdyhYx0D81" alt="" className="object-cover h-24 w-20"/>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-slate-200 hover:border-slate-200"
              >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-slate-200 hover:border-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;