"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from 'lucide-react';


export default function AboutAll() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white px-6 md:px-12 py-20 space-y-28 overflow-hidden">

      {/* Grid Pattern Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(100,100,100,0.05)_1px,transparent_1px)]
        bg-[size:20px_20px] -z-10"
      />

      {/* =========== ABOUT SECTION =========== */}
      <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-2xl"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 headings"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.4)",
              color: "#fff"
            }}
          >
            MERN Full Stack Developer
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m <span className="text-white font-semibold">Mohammed Shanif</span>,
            engineering full-stack web applications with scalable backend logic
            and performance-focused UI using the MERN ecosystem.
          </p>
          <button className="px-5 py-3 bg-white text-black hover:bg-black hover:text-white transform duration-300 rounded-3xl cursor-pointer mt-5 md:mt-4 flex flex-row justify-center items-center gap-3" >Download Resume <Download size={18}/> </button>
        </motion.div>
      </section>

      {/* =========== SKILLS =========== */}
      <section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <SkillCard title="Frontend Development" skills={[
            "JavaScript", "React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"
          ]} />

          <SkillCard title="Backend Development" skills={[
            "Node.js", "Express.js", "RESTful APIs", "JWT", "OAuth"
          ]} />

          <SkillCard title="Databases" skills={[
            "MongoDB", "Mongoose", "PostgreSQL"
          ]} />

          <SkillCard title="Tools & Platforms" skills={[
            "GitHub", "Postman", "Vercel", "Render", "Razorpay", "Stripe"
          ]} />
        </div>
      </section>

      {/* =========== EXPERIENCE =========== */}
      <section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Experience</h2>

        <div className="relative border-l-2 border-white/20 pl-6 space-y-12">
          <TimelineItem
            title="Intern — MERN Developer"
            year="2024 - Present"
            desc="Building deployed MERN applications following Agile methods."
          />
          <TimelineItem
            title="Freelance Web Developer"
            year="2025 - Present"
            desc="Developing business projects with secure authentication and admin dashboards."
          />
        </div>
      </section>

      {/* =========== EDUCATION =========== */}
      <section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Education</h2>

        <div className="space-y-6 max-w-2xl">
          <EduCard
            course="Full Stack MERN Development — Self Learning"
            year="2023 - Present"
          />
          <EduCard
            course="Higher Secondary Education (Science)"
            year="2021 - 2023"
            place="Kerala, India"
          />
        </div>
      </section>

    </section>
  );
}


// 🧩 Sub Components (unchanged)
const SkillCard = ({ title, skills }: any) => (
  <div className="bg-white/10 p-6 rounded-2xl shadow-md border border-white/10 hover:bg-white/15 transition">
    <h3 className="text-xl font-semibold mb-4 headings">{title}</h3>
    <ul className="space-y-2 text-gray-300">
      {skills.map((skill: string) => (
        <li  key={skill}>• {skill}</li>
      ))}
    </ul>
  </div>
);

const TimelineItem = ({ title, year, desc }: any) => (
  <div>
    <div className="absolute -left-3 w-3 h-3 bg-blue-500 rounded-full border border-black"></div>
    <h3 className="text-xl font-semibold headings">{title}</h3>
    <p className="text-gray-400 text-sm">{year}</p>
    <p className="text-gray-300 mt-2">{desc}</p>
  </div>
);

const EduCard = ({ course, year, place }: any) => (
  <div className="bg-white/10 p-6 rounded-lg border border-white/10">
    <h3 className="font-semibold text-lg headings">{course}</h3>
    <p className="text-sm text-gray-400">{year}</p>
    {place && <p className="text-gray-300 mt-1">{place}</p>}
  </div>
);
