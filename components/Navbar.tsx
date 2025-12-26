"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full px-6 md:px-12 py-5 flex justify-between items-center sticky top-0 z-50 bg-black"
      >

        {/* Name */}
        <button
          onClick={() => router.push("/")}
          className="text-lg md:text-2xl font-extrabold tracking-wide bg-transparent cursor-pointer"
        >
          Mohammed Shanif
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative group text-base font-medium">
              <button
                onClick={() => router.push(item.href)}
                className="relative px-1"
              >
                <span
                  className={`${
                    pathname === item.href
                      ? "text-white cursor-pointer"
                      : "text-gray-300 group-hover:text-white transition cursor-pointer"
                  }`}
                >
                  {item.name}
                </span>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                    pathname === item.href
                      ? "w-full bg-white"
                      : "w-0 bg-white group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button
          onClick={() => router.push("/contact")}
          className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
        >
          Contact <ArrowUpRight size={18} />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenMenu(true)}
          className="md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </motion.nav>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 z-[100]"
          >

            {/* Close */}
            <button
              onClick={() => setOpenMenu(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setOpenMenu(false);
                  router.push(item.href);
                }}
                className={`text-2xl font-semibold ${
                  pathname === item.href ? "text-white" : "text-gray-300"
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => {
                setOpenMenu(false);
                router.push("/contact");
              }}
              className="mt-4 text-lg bg-white text-black px-6 py-3 rounded-full  flex flex-row gap-2 justify-center items-center"
            >
              Contact 
               <ArrowUpRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
