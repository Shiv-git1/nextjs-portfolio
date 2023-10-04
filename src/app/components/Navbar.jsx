"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import Image from "next/image";
// import { XmarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl flex md:text-5xl text-white font-semibold"
        >
          <Image
            src="/images/mongodb-icon.png"
            // className="bg-primary-500"
            // style={{ borderRadius: 30 }}
            height={60}
            width={60}
            alt="logo"
          />

          <Image
            src="/images/javascript-icon.png"
            // className="bg-primary-500"
            // style={{ borderRadius: 30 }}
            height={60}
            width={60}
            alt="logo"
          />

          <Image
            src="/images/react-icon.png"
            // className="bg-black"
            // style={{ borderRadius: 30 }}
            height={60}
            width={60}
            alt="logo"
          />

          <Image
            src="/images/nodejs-icon.png"
            // className="bg-black"
            // style={{ borderRadius: 30 }}
            height={60}
            width={60}
            alt="logo"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
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
