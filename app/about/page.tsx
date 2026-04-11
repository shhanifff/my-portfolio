"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

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
          src="https://res.cloudinary.com/dvj3mphwu/image/upload/v1775796235/20260307_155651.jpg_zht52q.jpg"
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
              color: "#fff",
            }}
          >
            MERN Full Stack Developer
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m{" "}
            <span className="text-white font-semibold">Mohammed Shanif</span>, a
            Full-Stack MERN Developer with 1.5+ years of experience across
            internship, freelance, and corporate environments. I specialize in
            engineering scalable web applications and performance-focused UI
            using the modern MERN ecosystem.
          </p>
          <a
            href="https://drive.google.com/file/d/1kurASaXQwwCL6Ol3cm9vjEBl3ZtPeXJq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-white text-black hover:bg-black hover:text-white transform duration-300 rounded-3xl cursor-pointer mt-5 md:mt-4 flex w-fit justify-center items-center gap-3"
          >
            Download Resume <Download size={18} />
          </a>
        </motion.div>
      </section>

      {/* =========== SKILLS =========== */}
      <section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <SkillCard
            title="Frontend Development"
            skills={[
              "JavaScript",
              "React.js",
              "Next.js",
              "Redux",
              "Tailwind CSS",
              "Bootstrap",
            ]}
          />

          <SkillCard
            title="Backend Development"
            skills={["Node.js", "Express.js", "RESTful APIs", "JWT", "OAuth"]}
          />

          <SkillCard
            title="Databases"
            skills={["MongoDB", "Mongoose", "PostgreSQL"]}
          />

          <SkillCard
            title="Tools & Platforms"
            skills={[
              "GitHub",
              "Postman",
              "Vercel",
              "Render",
              "Razorpay",
              "Stripe",
            ]}
          />

          <SkillCard
            title="Methodologies & Soft Skills"
            skills={[
              "Agile Methodologies",
              "Project Management",
              "Communication",
              "Team Collaboration",
            ]}
          />
        </div>
      </section>

      {/* =========== EXPERIENCE =========== */}
      <section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Experience</h2>

        <div className="relative border-l-2 border-white/20 pl-6 space-y-12">
          <TimelineItem
            title="Full Stack Developer — TrigAds Digital Solutions"
            year="1/2026 - Present"
            desc="Developing 4+ full-stack applications with Next.js, building scalable APIs, and optimizing MongoDB schemas for high performance."
          />
          <TimelineItem
            title="Freelance Web Developer"
            year="2026 - Present"
            desc="Deploying MERN stack applications with focus on pixel-perfect Figma-to-UI conversion and system efficiency."
          />
          <TimelineItem
            title="Intern — Bridgeon Solutions LLP"
            year="2024 - 11/2025"
            desc="Developed 3+ MERN stack applications through project-based learning, focusing on cross-device compatibility and structured data handling."
          />
        </div>
      </section>

      {/* =========== EDUCATION =========== */}
      <section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Education</h2>

        <div className="space-y-6 max-w-2xl">
          <EduCard
            course="BCA (Bachelor of Computer Applications)"
            year="2025 - Present"
            place="IGNOU (Ongoing)"
          />
          <EduCard
            course="Higher Secondary Education (Biology Science)"
            year="2022 - 2024"
            place="GHSS Vazhkkad, Kerala"
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
        <li key={skill}>• {skill}</li>
      ))}
    </ul>
  </div>
);

const TimelineItem = ({ title, year, desc }: any) => (
  <div className="relative">
    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-black"></div>
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
