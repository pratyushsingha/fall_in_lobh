"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Code } from "lucide-react";

const Logo = () => (
  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-6 right-6 z-50">
    <motion.div whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
      <Code className="w-6 h-6 text-white" />
      <span className="text-white font-bold">StackBlitz</span>
    </motion.div>
  </motion.div>
);

const ContactItem = ({ icon: Icon, title, content, href, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl cursor-pointer group"
  >
    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/20 transition-colors">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="text-white/60 text-sm">{title}</h3>
      <p className="text-white font-medium">{content}</p>
    </div>
  </motion.a>
);

const SocialButton = ({ icon: Icon, href, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
  >
    <Icon className="w-6 h-6 text-white" />
  </motion.a>
);

export default function ContactsPage() {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-pink-400 to-pink-600 p-4 md:p-8">
      <Logo />

      <div className="max-w-4xl mx-auto pt-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <motion.h1 initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 10 }} className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let's Connect ✨
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/80 text-lg">
            Reach out and let's create something magical together
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <ContactItem icon={Mail} title="Email" content="hello@example.com" href="mailto:hello@example.com" delay={0.2} />
          <ContactItem icon={Phone} title="Phone" content="+1 (555) 123-4567" href="tel:+15551234567" delay={0.3} />
          <ContactItem icon={MapPin} title="Location" content="San Francisco, CA" href="https://maps.google.com" delay={0.4} />
          <ContactItem icon={Linkedin} title="LinkedIn" content="Connect with us" href="https://linkedin.com" delay={0.5} />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="relative">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl" />
          <div className="relative p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                />
              </div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex justify-center gap-4 mt-12">
          <SocialButton icon={Twitter} href="https://twitter.com" delay={0.9} />
          <SocialButton icon={Github} href="https://github.com" delay={1} />
          <SocialButton icon={Linkedin} href="https://linkedin.com" delay={1.1} />
        </motion.div>
      </div>
    </div>
  );
}
