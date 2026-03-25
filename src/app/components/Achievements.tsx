"use client";

import { motion } from "motion/react";
import { Briefcase, Users, TrendingUp } from "lucide-react";

export function Achievements() {
  const stats = [
    {
      icon: Briefcase,
      value: "5+",
      label: "Projects Delivered",
      description: "Completed with focus, quality, and client satisfaction",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Users,
      value: "5+",
      label: "Happy Clients",
      description: "Building trust through meaningful partnerships",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      icon: TrendingUp,
      value: "Growing",
      label: "Startup Momentum",
      description: "Expanding steadily with new ideas and opportunities",
      gradient: "from-emerald-600 to-teal-600",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Startup Founded",
      description: "We started with a simple vision to build impactful digital solutions.",
    },
    {
      year: "2025",
      title: "First Clients Onboarded",
      description: "We began working with our first clients and delivering real business value.",
    },
    {
      year: "2026",
      title: "Early Projects Delivered",
      description: "Successfully completed initial projects across design, development, and innovation.",
    },
    {
      year: "2026",
      title: "Growing Network",
      description: "Expanded our client relationships and strengthened our startup foundation.",
    },
    {
      year: "2026",
      title: "Looking Ahead",
      description: "Focused on growth, better products, and creating long-term impact.",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1a2332] to-[#0A1628] py-20"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-indigo-500 blur-3xl md:h-96 md:w-96" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-500 blur-3xl md:h-96 md:w-96" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-300 md:text-xl">
            Early milestones that reflect our passion, progress, and vision for growth
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
              />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient}`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div
                  className={`mb-2 text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent md:text-4xl`}
                >
                  {stat.value}
                </div>
                <div className="mb-1 font-semibold text-white">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">
            Our Journey
          </h3>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-600 sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={`${milestone.year}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start sm:items-center ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#1a2332] bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/50 sm:left-1/2" />

                  <div className="pl-10 sm:w-1/2 sm:pl-0 sm:pr-8">
                    <div
                      className={`rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 ${
                        index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                      }`}
                    >
                      <div className="mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                        {milestone.year}
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-white md:text-xl">
                        {milestone.title}
                      </h4>
                      <p className="text-sm leading-6 text-gray-400 md:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}