import { motion } from 'motion/react';
import { Brain, Globe, Smartphone, Cpu, Server } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and make smarter decisions.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      gradient: "from-blue-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1674027444636-ce7379d51252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBuZXR3b3JrfGVufDF8fHx8MTc3NDI3MDg3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build fast, scalable, and beautiful web applications that deliver exceptional user experiences and drive business growth.",
      features: ["Custom Web Apps", "E-commerce Platforms", "Progressive Web Apps", "API Development"],
      gradient: "from-indigo-600 to-purple-600",
      image: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzQyODIwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Create powerful mobile applications for iOS and Android that engage users and deliver seamless experiences across all devices.",
      features: ["Native iOS & Android", "Cross-platform Apps", "UI/UX Design", "App Store Optimization"],
      gradient: "from-purple-600 to-pink-600",
      image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc0MjYzOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Cpu,
      title: "IoT Implementation",
      description: "Connect the physical and digital worlds with intelligent IoT solutions that optimize operations and unlock new possibilities.",
      features: ["Smart Device Integration", "Real-time Monitoring", "Data Analytics", "Cloud Connectivity"],
      gradient: "from-emerald-600 to-teal-600",
      image: "https://images.unsplash.com/photo-1717323181080-334e21c2dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzbWFydCUyMHRlY2hub2xvZ3klMjBkZXZpY2VzfGVufDF8fHx8MTc3NDM0ODQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Server,
      title: "DevOps",
      description: "Streamline your development and operations with automated CI/CD pipelines, cloud infrastructure, and continuous monitoring for faster delivery.",
      features: ["CI/CD Automation", "Cloud Infrastructure", "Container Orchestration", "Performance Monitoring"],
      gradient: "from-orange-600 to-red-600",
      image: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0Mjc4MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`} />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}