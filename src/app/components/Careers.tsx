"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Code,
  Palette,
  Wrench,
  Users,
  Briefcase,
  ArrowRight,
  X,
  MapPin,
  Building2,
} from "lucide-react";
import { Button } from "./ui/button";
import { ApplicationForm } from "./ui/applicationForm";

type Position = {
  title: string;
  type: string;
  location: string;
  department: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
};

export function Careers() {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [showForm, setShowForm] = useState(false);

const positions: Position[] = [
  {
    title: "Flutter Developer Intern",
    type: "Internship",
    location: "Remote",
    department: "Engineering",
    icon: Code,
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    title: "Go Developer Intern",
    type: "Internship",
    location: "Remote",
    department: "Engineering",
    icon: Code,
    skills: ["Go", "Gin", "PostgreSQL", "Microservices"],
  },
  {
    title: "AI/ML Intern",
    type: "Internship",
    location: "Remote",
    department: "AI Division",
    icon: Wrench,
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning"],
  },
  {
    title: "Computer Vision Intern",
    type: "Internship",
    location: "Remote",
    department: "AI Division",
    icon: Wrench,
    skills: ["Python", "OpenCV", "PyTorch", "Image Processing"],
  },
  {
    title: "Generative AI Intern",
    type: "Internship",
    location: "Remote",
    department: "AI Division",
    icon: Wrench,
    skills: ["Python", "LLMs", "Prompt Engineering", "LangChain"],
  },
];

  const benefits = [
    "Competitive salary & equity",
    "Flexible remote work",
    "Learning & development budget",
    "Cutting-edge tech stack",
  ];

  const handleApply = (title: string) => {
    setSelectedPosition(title);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedPosition("");
  };

  const handleGeneralApply = () => {
    setSelectedPosition("General Application");
    setShowForm(true);
  };

  return (
    <section id="careers" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Join Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            Be part of a team that&apos;s shaping the future of technology.
            We&apos;re looking for talented developers, designers, and innovators
            who are passionate about creating extraordinary digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 p-12"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10 text-center text-white">
            <Users className="mx-auto mb-6 h-16 w-16" />
            <h3 className="mb-4 text-3xl font-bold">Why Work at VSNION?</h3>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90">
              Join a fast-growing tech company where innovation meets impact.
              Work on challenging projects, collaborate with brilliant minds,
              and grow your career in an environment that values creativity,
              excellence, and continuous learning.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <p className="font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Open Positions
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-indigo-600/50 hover:shadow-xl"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
                      <position.icon className="h-6 w-6 text-white" />
                    </div>

                    <div>
                      <h4 className="mb-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
                        {position.title}
                      </h4>

                      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="mr-1 h-4 w-4" />
                          {position.type}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {position.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                    <Building2 className="mr-1 h-4 w-4" />
                    {position.department}
                  </span>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {position.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Button
                  type="button"
                  onClick={() => handleApply(position.title)}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gray-50 p-12 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            Don&apos;t see the right position?
          </h3>
          <p className="mb-6 text-lg text-gray-600">
            We&apos;re always looking for exceptional talent. Send us your
            resume and let&apos;s talk about how you can contribute to
            VSNION&apos;s mission.
          </p>
          <Button
            type="button"
            size="lg"
            variant="outline"
            onClick={handleGeneralApply}
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
          >
            Send General Application
          </Button>
        </motion.div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-gray-200 bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between rounded-t-3xl border-b border-gray-100 bg-white/95 px-6 py-5 backdrop-blur md:px-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Apply for {selectedPosition}
                </h3>
                <p className="mt-2 text-gray-600">
                  Fill out the application form below.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCloseForm}
                className="ml-4 rounded-full p-2 transition hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <ApplicationForm selectedPosition={selectedPosition} />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}