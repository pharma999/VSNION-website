"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";


export function Hero() {
  const goToSection = (href: string) => {
    window.location.hash = href;
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1a2332] to-[#0A1628]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-20 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2"
        >
          <Sparkles className="h-4 w-4 text-indigo-400" />
          <span className="text-sm text-indigo-300">
            Welcome to the Future of Technology
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-6xl font-bold tracking-tight text-white md:text-8xl"
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            VSNION
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-6 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          Innovating the Future with AI, Apps, Web, IoT & DevOps
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-lg text-gray-300 md:text-xl"
        >
          Transforming ideas into intelligent digital solutions. We build
          cutting-edge technology that powers the next generation of businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => goToSection("#careers")}
            className="rounded-xl border-white/20 bg-white/5 px-8 py-6 text-lg text-white backdrop-blur-sm hover:bg-white/10"
          >
            Join Our Team
          </Button>

          <Button
            size="lg"
            variant="ghost"
            onClick={() => goToSection("#portfolio")}
            className="rounded-xl px-8 py-6 text-lg text-white hover:bg-white/10"
          >
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}