"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    title: "ZENT - E-Commerce Platform",
    desc: "Full-stack MERN e-commerce app with authentication, admin management, and secure online payments.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    demo: "https://zent-client.vercel.app/",
    github: "https://github.com/shhanifff/ZENT-client",
    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1766385835/Zent_igdacq.png",
  },
  {
    title: "eestate - Buy & Sell Platform",
    desc: "MERN real estate application for buying, selling, and managing properties with real-time features.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "RTK Query",
      "Stripe",
    ],
    demo: "#",
    github: "https://github.com/eestate/eestate/tree/dev",
    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1766386554/eestate_pym7bf.png",
  },
  {
    title: "ticketa - Ticket Booking System",
    desc: "Scalable MERN event booking platform with real-time search, secure auth, and online ticket payments.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "Context API",
      "Razorpay",
    ],
    demo: "https://ticketa-frontend.vercel.app/",
    github: "https://github.com/shhanifff/ticketa-Event-Mangment",
    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1766388046/ticketa-Wallpaper_ivwwux.png",
  },
  {
  title: "Ferrari Landing Intro Page",
  desc: "A visually striking Ferrari-inspired landing intro page built using modern frontend technologies. Focused on smooth UI, responsive layout, and premium brand aesthetics using vibe coding principles.",
  tech: [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "Vibe Coding",
    "Responsive Design",
    "Modern UI/UX"
  ],
  demo: "https://ferrari-beta.vercel.app/",
  github: "https://github.com/shhanifff/ferrari",
  img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1766767807/Screenshot_2025-12-26_221605_pjkasq.png",
}
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-14 py-28">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg hover:shadow-2xl transition"
          >
            {/* Image full width focus */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 md:h-52 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h3 className="text-lg font-bold text-white headings">
                {project.title}
              </h3>

              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-2xl bg-white/10 text-gray-200 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-xs flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-xs flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  Code
                  <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
