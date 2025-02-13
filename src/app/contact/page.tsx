"use client";

import { motion } from "framer-motion";
import {  Code } from "lucide-react";

const Logo = () => (
  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-6 right-6 z-50">
    <motion.div 
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg"
    >
      <Code className="w-8 h-8 text-white" />
    </motion.div>
  </motion.div>
);

export default function ContactsPage() {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-pink-400 to-pink-600 p-6 md:p-8">
      <Logo />
      
      <div className="max-w-7xl mx-auto pt-24 grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-10">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-bold text-white mb-6"
            >
              Contact us
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl text-white/90 font-light"
            >
              Get in touch
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed">
              Please feel free to connect and share your thoughts.{' '}
              <a href="#" className="text-fuchsia-200 hover:text-white transition-colors">
                We&apos;re here to help.
              </a>{' '}
              We&apos;d love to hear from you.
            </p>
          </motion.div>

          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <li className="flex items-center gap-4 text-white/90 text-xl">
              <div className="w-6 h-6 rounded-full bg-fuchsia-300 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-900" />
              </div>
              Learn more about the product
            </li>
           
            <li className="flex items-center gap-4 text-white/90 text-xl">
              <div className="w-6 h-6 rounded-full bg-fuchsia-300 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-900" />
              </div>
              Request a demo
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-lg"
          >
            Contact us directly at{' '}
            <a href="mailto:support@zenux.live" className="text-fuchsia-200 hover:text-white font-medium transition-colors">
              support@zenux.live
            </a>
          </motion.div>
        </div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-pink-400/40 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-white/90 text-lg font-medium">Your name</label>
                <input
                  type="text"
                  className="w-full bg-pink-500/20 border-2 border-white/20 rounded-xl px-5 py-4 text-lg text-white placeholder:text-white/50 focus:outline-none focus:border-fuchsia-300/70"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-white/90 text-lg font-medium">Your work email</label>
                <input
                  type="email"
                  className="w-full bg-pink-500/20 border-2 border-white/20 rounded-xl px-5 py-4 text-lg text-white placeholder:text-white/50 focus:outline-none focus:border-fuchsia-300/70"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-white/90 text-lg font-medium">Company name</label>
              <input
                type="text"
                className="w-full bg-pink-500/20 border-2 border-white/20 rounded-xl px-5 py-4 text-lg text-white placeholder:text-white/50 focus:outline-none focus:border-fuchsia-300/70"
                placeholder="Enter company name"
              />
            </div>

            <div className="space-y-3">
              <label className="text-white/90 text-lg font-medium">How did you hear about us?</label>
              <input
                type="text"
                className="w-full bg-pink-500/20 border-2 border-white/20 rounded-xl px-5 py-4 text-lg text-white placeholder:text-white/50 focus:outline-none focus:border-fuchsia-300/70"
                placeholder="Tell us how you found us"
              />
            </div>

            <div className="space-y-3">
              <label className="text-white/90 text-lg font-medium">Notes</label>
              <textarea
                rows={4}
                className="w-full bg-pink-500/20 border-2 border-white/20 rounded-xl px-5 py-4 text-lg text-white placeholder:text-white/50 focus:outline-none focus:border-fuchsia-300/70"
                placeholder="Anything else you'd like to share with the Zenux Studios?"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-fuchsia-300 hover:bg-fuchsia-200 text-fuchsia-950 text-xl font-semibold rounded-xl px-8 py-4 transition-colors shadow-lg"
            >
              SUBMIT
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}