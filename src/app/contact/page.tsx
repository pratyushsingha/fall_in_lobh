"use client";

import { motion } from "framer-motion";

export default function ContactsPage() {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-pink-300 to-purple-400 p-6 md:p-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-6 shadow-xl w-full"
        >
          <form 
            className="space-y-6"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input type="hidden" name="access_key" value="47601f6b-9224-446e-af9d-9bd037c0b998" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className="text-gray-800 text-lg font-medium">Your name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-pink-100 border-2 border-pink-200 rounded-xl px-5 py-4 text-lg text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-fuchsia-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-gray-800 text-lg font-medium">Your work email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-pink-100 border-2 border-pink-200 rounded-xl px-5 py-4 text-lg text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-fuchsia-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-gray-800 text-lg font-medium">Company name</label>
              <input
                type="text"
                name="company"
                className="w-full bg-pink-100 border-2 border-pink-200 rounded-xl px-5 py-4 text-lg text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-fuchsia-400"
                placeholder="Enter company name"
              />
            </div>

            <div className="space-y-3">
              <label className="text-gray-800 text-lg font-medium">How did you hear about us?</label>
              <input
                type="text"
                name="source"
                className="w-full bg-pink-100 border-2 border-pink-200 rounded-xl px-5 py-4 text-lg text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-fuchsia-400"
                placeholder="Tell us how you found us"
              />
            </div>

            <div className="space-y-3">
              <label className="text-gray-800 text-lg font-medium">Notes</label>
              <textarea
                rows={4}
                name="notes"
                className="w-full bg-pink-100 border-2 border-pink-200 rounded-xl px-5 py-4 text-lg text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-fuchsia-400"
                placeholder="Anything else you'd like to share with the Zenux Studios?"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-xl font-semibold rounded-xl px-8 py-4 transition-colors shadow-lg"
            >
              SUBMIT
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}