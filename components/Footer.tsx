"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 border-dotted border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 text-center bg-black">

        {/* Branding */}
        <h3 className="text-2xl font-bold text-white">
          Mohammed Shanif
        </h3>
        <p className="text-sm text-gray-400">
          MERN Stack Developer | UI Engineering & Backend Logic
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-3">
          <a
            href="https://github.com/shhanifff"
            target="_blank"
            className="hover:text-white transition transform hover:scale-110"
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/in/mohammed-shanif-cc"
            target="_blank"
            className="hover:text-white transition transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:mohammedshanifcc@gmail.com"
            className="hover:text-white transition transform hover:scale-110"
          >
            <Mail size={24} />
          </a>


        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mt-6 border-dotted" />

        {/* Bottom Text */}
        <p className="text-xs text-gray-500">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Shanif. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
