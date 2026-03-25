import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

type Project = {
  title: string;
  category: string | string[];
  description: string;
  image: string;
  tags: string[];
  gradient: string;
};

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "AI", "Web", "Mobile", "IoT"];

  const projects: Project[] = [
    {
      title: "Healthcare App Admin & Super Admin",
      category: ["Mobile", "Web"],
      description:
        "A healthcare management solution available on both mobile and web, with admin and super admin panels for managing users, appointments, records, and overall system operations.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["Mobile App", "Web App", "Admin Panel", "Dashboard"],
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      title: "AI Chatbot",
      category: "AI",
      description:
        "An intelligent chatbot built to automate conversations, improve customer support, and provide fast responses using AI-driven workflows.",
      image:
        "https://images.unsplash.com/photo-1674027444636-ce7379d51252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["AI", "Chatbot", "NLP"],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Marriage Lawn Website",
      category: "Web",
      description:
        "A modern business website for a marriage lawn with services, gallery, booking inquiry, and event showcase sections.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["Website", "Business", "Responsive"],
      gradient: "from-pink-600 to-rose-600",
    },
    {
      title: "Prompt-Based AI Project",
      category: "AI",
      description:
        "A prompt-driven AI solution designed to generate smart outputs, automate workflows, and support business use cases with custom prompts.",
      image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FPhC3Lh5jPVnRFgFCWjL3hv6YFMNfIQMEA&s",
      tags: ["Prompt AI", "Automation", "LLM"],
      gradient: "from-violet-600 to-indigo-600",
    },
    {
      title: "Healthcare Analysis Chatbot",
      category: "AI",
      description:
        "An AI-powered healthcare chatbot that helps analyze health-related inputs, provide insights, and assist users with smart conversational support.",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["Healthcare AI", "Chatbot", "Analysis"],
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "Smart Device Monitoring System",
      category: "IoT",
      description:
        "A dummy IoT project for monitoring smart devices, tracking sensor activity, and visualizing real-time data through a connected dashboard.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["IoT", "Sensors", "Dashboard"],
      gradient: "from-orange-600 to-amber-600",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeFilter)
            : project.category === activeFilter
        );

  return (
    <section id="portfolio" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            A showcase of our startup projects across AI, web solutions, mobile apps,
            and smart systems
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                    : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-90`}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                    View Project
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1 text-xs font-semibold text-white`}
                  >
                    {Array.isArray(project.category)
                      ? project.category.join(" / ")
                      : project.category}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm text-gray-600">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}