"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    title: "Fathima Healthcare - Hospital Management System",
    desc: "Enhanced a MERN-based hospital management system by developing appointment scheduling, lab report management, and pharmacy modules. Improved operational workflow by structuring data flow between departments and optimizing usability for both staff and patients.",
    tech: ["Next.js", "Node.js", "Express", "Firebase"],
    demo: "https://fathimahealthcare.in/",
    github: "",
    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1775797423/Screenshot_2026-04-10_103316_c68rox.png",
  },
  {
    title: "Ancraze - Learning Platform",
    desc: "Developed backend architecture for a learning platform handling user management, course access, and enrollment workflows. Implemented manual payment verification and structured onboarding flow. Built admin and trainer modules for managing students, assigning tasks, and tracking progress using a WhatsApp-based communication system.",
    tech: ["Node.js", "Express", "MongoDB"],
    demo: "",
    github: "",
    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1775810294/Screenshot_2026-04-10_140611_dustwh.png",
  },
  {
    title: "MHM Hindi Club - Smart Hindi Learning Platform",

    desc: "An interactive Hindi learning platform for students of classes 5–7 featuring Varnamala practice, smart dictionary, AI mentor, exams, textbook PDFs, handwriting practice, and teacher/admin management system.",

    tech: ["Next.js", "Node.js", "Express", "Firebase"],

    demo: "https://yourhindiclub.com/",
    github: "#",

    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1778663004/ChatGPT_Image_May_13_2026_02_33_07_PM_ck7xpc.png",
  },
  {
    title: "E-Commerce Platform | MERN Stack",
    desc: "Built a full-stack e-commerce platform with secure authentication and role-based authorization using JWT. Designed a COD checkout flow with order tracking and developed a responsive UI with an admin dashboard supporting complete CRUD operations for product and order management.",
    tech: ["Next.js", "Node.js", "Express.js", "Firebase", "JWT"],
    demo: "https://topnotch-two.vercel.app/",
    github: "",
    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1775815686/Screenshot_2026-04-10_153741_tf4bln.png",
  },
  {
    title: "ZENT - E-Commerce Platform",
    desc: "Developed a full-stack MERN e-commerce application with secure authentication, admin product management, and integrated online payments using Razorpay. Focused on building a scalable architecture and smooth checkout experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    demo: "https://zent-client.vercel.app/",
    github: "https://github.com/shhanifff/ZENT-client",
    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1766385835/Zent_igdacq.png",
  },
  {
    title: "Reemdates - Product Showcase Platform",
    desc: "Designed a product showcase platform focused on lead conversion, enabling users to browse products and place orders directly via WhatsApp. Implemented pre-filled messaging flow to reduce user friction and improve ordering efficiency.",
    tech: ["Next.js", "Firebase", "Node.js", "Express"],
    demo: "https://reemdates.in/",
    github: "",
    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1775816311/Screenshot_2026-04-10_154643_eimvw1.png",
  },
  {
    title: "Softell - Product Showcase & Conversion Platform",
    desc: "Developed a conversion-focused product showcase platform for a car cup holder tissue product. Engineered a seamless user journey from product discovery to WhatsApp-based ordering with pre-filled messages. Optimized images for faster load performance and integrated smooth UI animations to improve engagement and product visibility. Built scalable backend APIs for product management.",
    tech: ["React.js", "MongoDB", "Node.js", "Express"],
    demo: "",
    github: "",
    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1775879794/Screenshot_2026-04-11_092450_p4ouu4.png",
  },
  {
    title: "eestate - Property Buy & Sell Platform",
    desc: "Developed a scalable MERN-based real estate platform with property listing, buying, and selling features. Implemented real-time communication using Socket.IO and integrated secure payments using Stripe. Focused on performance and state management using RTK Query.",
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
    title: "ticketa - Event Ticket Booking System",
    desc: "Built a scalable event ticket booking platform with real-time search, secure authentication, and online payments. Integrated Razorpay for transactions and implemented state management for efficient data handling across the application.",
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
    title: "Ferrari Landing Intro Page Beta",
    desc: "Designed a high-performance, visually rich landing page inspired by Ferrari branding. Focused on responsive design, smooth animations, and premium UI aesthetics to deliver an engaging user experience.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "Modern UI/UX",
    ],
    demo: "https://ferrari-beta.vercel.app/",
    github: "https://github.com/shhanifff/ferrari",
    img: "https://res.cloudinary.com/dvj3mphwu/image/upload/v1766767807/Screenshot_2025-12-26_221605_pjkasq.png",
  },
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
