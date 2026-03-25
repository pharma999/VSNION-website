import { motion } from 'motion/react';
import { Target, Eye, Award } from 'lucide-react';
import hero from "../assets/hero.png";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative technology solutions that drive digital transformation and create measurable impact."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the global leader in intelligent technology solutions, shaping the future of digital innovation across industries."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Innovation, Excellence, Integrity, and Client Success are at the core of everything we do."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">VSNION</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of visionary technologists, designers, and innovators dedicated to 
            building intelligent solutions that transform businesses and improve lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={hero}
              alt="VSNION Team"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Pioneering Digital Excellence Since Day One
            </h3>
            <p className="text-lg text-gray-600">
              At VSNION, we don't just build technology—we craft experiences that matter. 
              Our multidisciplinary team combines deep technical expertise with creative 
              thinking to deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-gray-600">
              From artificial intelligence and machine learning to cutting-edge web and mobile 
              applications, we leverage the latest technologies to help businesses stay ahead 
              in an ever-evolving digital landscape. Our DevOps expertise ensures seamless 
              deployment and continuous delivery of exceptional solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
              </div>
              <div className="flex-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div className="flex-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}