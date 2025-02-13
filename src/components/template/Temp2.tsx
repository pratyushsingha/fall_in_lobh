"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowRight, Code, Sparkles } from "lucide-react";
import Image from "next/image";

interface Temp2Props {
  title: string;
  messages: string[];
  moods: string[];
  prev: boolean;
  noButtonMessages: string[];
  celebrationMediaUrl: string;
  celebrationMessage: string;
}

const Logo = ({ prev = false }: { prev: boolean }) => (
  <div className="absolute w-full flex items-center justify-center">
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className={`fixed z-50 ${prev ? "bottom-8" : "bottom-4"}`}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        <Code className="w-6 h-6 text-white" />
        <span className="text-white font-bold">Zenux Studios</span>
      </motion.div>
    </motion.div>
  </div>
);

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: 0.5 + Math.random() * 0.5,
            rotate: Math.random() * 360 
          }}
          animate={{
            y: -100,
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
        >
          <Heart className="w-8 h-8 text-white/20 fill-white/20" />
        </motion.div>
      ))}
    </div>
  );
};

export default function Temp2({ 
  title,
  messages, 
  moods, 
  prev = false,
  celebrationMediaUrl,
  celebrationMessage 
}: Temp2Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  if (!messages || messages.length === 0) {
    return <div>No messages to display.</div>;
  }

  if (prev)
    document.title = "Zenux Studios";
  else
    document.title = title;

  const nextStep = useCallback(() => {
    if (currentStep < messages.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowCelebration(true);
    }
  }, [currentStep, messages.length]);

  const messageVariants = {
    initial: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: { 
      opacity: 0,
      y: -50,
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  if (!started) {
    return (
      <div className={`relative flex items-center justify-center ${prev ? "min-h-[60dvh]" : "min-h-screen"} bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 overflow-hidden`}>
        <FloatingHearts />
        <Logo prev={prev} />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="text-center p-8 z-10"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <Heart className="w-32 h-32 text-white fill-white mx-auto" />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStarted(true)}
            className="bg-white text-pink-500 px-8 py-4 rounded-full font-bold text-xl shadow-lg
              hover:shadow-xl transition-all flex items-center gap-3 mx-auto group"
          >
            <span>Begin Journey</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative ${prev ? "min-h-[60dvh]" : "min-h-screen"} bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 overflow-hidden`}>
      <FloatingHearts />
      <Logo prev={prev} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={messageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center p-4"
        >
          <div className="max-w-2xl w-full">
            <motion.div
              className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-6xl mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {moods[currentStep]}
              </motion.div>
              <motion.p
                className="text-white text-2xl font-bold mb-8 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {messages[currentStep]}
              </motion.p>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="bg-white text-pink-500 px-8 py-3 rounded-full font-bold text-xl
                  hover:bg-pink-50 transition-colors shadow-lg flex items-center gap-2 mx-auto group"
              >
                <span>
                  {currentStep === messages.length - 1 ? "Finish" : "Continue"}
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {currentStep === messages.length - 1 ? (
                    <Heart className="w-6 h-6 fill-pink-500" />
                  ) : (
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  )}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 10 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    "linear-gradient(45deg, #ff69b4, #ff1493)",
                    "linear-gradient(45deg, #ff1493, #ff69b4)",
                    "linear-gradient(45deg, #ff69b4, #ff1493)"
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={celebrationMediaUrl}
                    alt="Celebration"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-pink-500 mb-6"
                >
                  {celebrationMessage}
                </motion.h2>

                <motion.button
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowCelebration(false);
                    setCurrentStep(0);
                  }}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full 
                    font-bold text-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  Continue Celebrating ✨
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}