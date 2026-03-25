"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "adarshv978@gmail.com",
      link: "mailto:adarshv978@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6386098744",
      link: "tel:+91 6386098744",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Jankipuram Lucknow Utar Pradesh",
      link: "https://www.google.com/maps?q=26.9153672,80.9585996&z=17&hl=en",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/adarshv978@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            _subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to send message");
      }

      alert("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Ready to start your next project? Let&apos;s talk about how we can
            help you achieve your goals
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8"
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="min-h-32 w-full"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 p-8 text-white">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
              </div>

              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold">
                  Let&apos;s Build Something Amazing Together
                </h3>
                <p className="mb-6 text-white/90">
                  Whether you&apos;re looking to build a new product, scale your
                  existing platform, or explore cutting-edge AI solutions,
                  we&apos;re here to help bring your vision to life.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="h-2 w-2 rounded-full bg-white" />
                    Free consultation available
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="h-2 w-2 rounded-full bg-white" />
                    Flexible engagement models
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="h-2 w-2 rounded-full bg-white" />
                    Quick response time
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-indigo-600/50 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 transition-transform duration-300 group-hover:scale-110">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="mb-1 text-sm text-gray-600">
                      {info.title}
                    </div>
                    <div className="font-semibold text-gray-900 transition-colors group-hover:text-indigo-600">
                      {info.content}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="rounded-xl bg-gray-50 p-6">
              <h4 className="mb-4 font-bold text-gray-900">Follow Us</h4>
           

              <div className="flex gap-4">
  {[
    { name: "LinkedIn", url: "#", icon: FaLinkedinIn },
    { name: "Twitter", url: "#", icon: FaTwitter },
    // { name: "GitHub", url: "#", icon: FaGithub },
    // { name: "Instagram", url: "#", icon: FaInstagram },
  ].map((social) => {
    const Icon = social.icon;

    return (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
        className="group flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 hover:text-white"
      >
        <Icon className="h-5 w-5" />
      </a>
    );
  })}
</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}