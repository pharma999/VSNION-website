import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Services: [
      { name: 'AI Solutions', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'App Development', href: '#services' },
      { name: 'IoT Implementation', href: '#services' },
      { name: 'DevOps', href: '#services' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    Resources: [
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Why Choose Us', href: '#why-choose-us' },
      { name: 'Achievements', href: '#achievements' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Data Protection', href: '#' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-[#0A1628] via-[#1a2332] to-[#0A1628] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-8 h-8 text-indigo-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  VSNION
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Innovating the future with AI, Web, App, and IoT solutions. Building tomorrow&apos;s technology today.
              </p>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2026 VSNION. All rights reserved. Built with passion and innovation.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/vsnion-technology-private-ltd-9959a63b7/"
              className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
            >
              Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}