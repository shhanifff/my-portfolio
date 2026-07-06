"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export default function Home() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!headingRef.current) return;

    const split = new SplitText(headingRef.current, { type: "chars" });

    gsap.from(split.chars, {
      opacity: 0,
      y: 60,
      rotateX: -90,
      stagger: 0.04,
      duration: 1.1,
      ease: "power4.out",
    });

    gsap.to(split.chars, {
      textShadow: "0 0 12px rgba(255,255,255,0.8)",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative h-screen w-full bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Background Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(100,100,100,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"
      />

      {/* Content wrapper with z-index FIX */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl mb-2 text-gray-400 tracking-wide"
        >
          Hey 👋
        </motion.span>

        <motion.h1
          ref={headingRef}
          className="text-6xl md:text-[8rem] font-black tracking-tight text-center leading-tight"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.4)",
            color: "#fff",
          }}
        >
          I’m Shanif
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-4 max-w-2xl text-center text-gray-300 text-lg md:text-2xl"
        >
          Full-Stack MERN Developer specializing in scalable backend logic and
          intuitive user experiences with 1.5+ years of professional experience.
        </motion.p>

        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: { delayChildren: 1, staggerChildren: 0.18 },
            },
          }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {[
            "JavaScript (ES6+)",
            "TypeScript",
            "React.js",
            "Next.js",
            "Redux Toolkit",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "RESTful APIs",
            "JWT & OAuth",
            "Razorpay & Stripe",
            "Git & GitHub",
            "Postman",
            "Vercel & Render",
            "Responsive Design",
            "Agile & Scrum",
            "AI-Assisted Dev",
          ].map((tag) => (
            <motion.span
              key={tag}
              variants={{
                initial: { opacity: 0, y: 20, scale: 0.8 },
                animate: { opacity: 1, y: 0, scale: 1 },
              }}
              className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg text-sm md:text-base text-gray-200"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* FIXED BUTTON */}
        <motion.button
          onClick={() => router.push("/contact")}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="cursor-pointer mt-10 px-7 py-3 rounded-full bg-white text-black text-lg font-bold hover:bg-gray-200 transition ring-2 ring-white/10 shadow-lg flex flex-row justify-center items-center gap-2"
        >
          Hire Me
          <ArrowUpRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}
