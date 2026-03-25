import { motion } from 'motion/react';
import { Lightbulb, Rocket, Shield, HeartHandshake, Zap, Award } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Innovation-Driven Team",
      description: "Our team stays ahead of technology trends, constantly exploring new tools and methodologies to deliver cutting-edge solutions.",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "We build with growth in mind. Our solutions are designed to scale seamlessly as your business expands and evolves.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize security at every level, implementing industry-best practices to protect your data and users.",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: HeartHandshake,
      title: "Client-Focused Development",
      description: "Your success is our success. We work closely with you throughout the entire development process to ensure your vision becomes reality.",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      icon: Zap,
      title: "Rapid Delivery",
      description: "We use agile methodologies to deliver high-quality products quickly, with continuous iteration and improvement.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "With 500+ successful projects and 200+ satisfied clients, our track record speaks for itself.",
      gradient: "from-rose-600 to-pink-600"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">VSNION</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What sets us apart and makes us the ideal technology partner for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Technology Stack
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              We work with cutting-edge technologies to build modern, performant, and scalable applications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker',
                'Kubernetes', 'TensorFlow', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Next.js'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 font-medium hover:bg-white/20 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
