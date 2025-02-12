"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Heart, Sparkles, XCircle } from "lucide-react";
import { useParams } from "next/navigation";

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const FloatingEmoji = ({ emoji, delay = 0 }: { emoji: string; delay?: number }) => (
  <motion.div
    initial={{ y: "100vh", x: Math.random() * window.innerWidth, rotate: 0 }}
    animate={{
      y: "-100vh",
      x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth, Math.random() * window.innerWidth],
      rotate: [0, 360, 720],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: 15 + Math.random() * 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute text-6xl pointer-events-none opacity-50"
  >
    {emoji}
  </motion.div>
);

const ColorBubble = ({ delay = 0 }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [1, 2, 0],
      opacity: [0, 0.15, 0],
      x: [0, Math.random() * 400 - 200],
      y: [0, Math.random() * 400 - 200],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none"
  />
);

const SparkleEffect = ({ x, y }: { x: number; y: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 0.5, 0],
    }}
    transition={{ duration: 1 }}
    className="absolute w-4 h-4"
    style={{ left: x, top: y }}
  >
    <Sparkles className="w-full h-full text-white/30" />
  </motion.div>
);

const textVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.5,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Home() {
  const { subdomain } = useParams();
  const [step, setStep] = useState(0);
  const [showEmojis, setShowEmojis] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [noCount, setNoCount] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonControls = useAnimation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // const messages = [
  //   `Welcome, ${subdomain} ! 👑`,
  //   `Your presence brightens my day...`,
  //   `Every moment is magical ✨`,
  //   `You're absolutely incredible 🌟`,
  //   `Together, we create perfection 🎵`,
  //   `Will you be my Valentine? 🌹`,
  // ];

  const messages = [
    `Welcome, ${subdomain}! \uD83D\uDC51`,
    "Your presence brightens my day... \uD83D\uDE0A",
    "Every moment is magical \u2728",
    "You're absolutely incredible \uD83C\uDF1F",
    "Together, we create perfection \uD83C\uDFB5",
    "Will you be my Valentine? \uD83C\uDF39",
  ];

  const emojis = ["💖", "✨", "🌹", "💝", "🎵", "🦋", "🌈", "💫", "🎀"];

  const yesButtonScales = [1, 1.1, 1.2, 1.3, 1.4];
  const noButtonMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
  ];

  useEffect(() => {
    if (showEmojis) {
      const timer = setInterval(() => {
        setStep((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [showEmojis, messages.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (Math.random() > 0.8) {
      const newSparkle: Sparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSparkles((prev) => [...prev.slice(-5), newSparkle]);
    }
    const newMousePos: MousePosition = { x: e.clientX, y: e.clientY };
    setMousePos(newMousePos);
  };

  const handleNoButtonHover = async () => {
    const rect = noButtonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;

    const angle = Math.atan2(mousePos.y - centerY, mousePos.x - centerX);
    const distance = 150 + noCount * 20;
    const newX = Math.cos(angle + Math.PI) * distance;
    const newY = Math.sin(angle + Math.PI) * distance;

    await noButtonControls.start({
      x: newX,
      y: newY,
      transition: { type: "spring", duration: 0.3 },
    });
  };

  if (!showEmojis) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-pink-400 to-pink-600" onMouseMove={handleMouseMove}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center relative">
          {sparkles.map((sparkle) => (
            <SparkleEffect key={sparkle.id} x={sparkle.x} y={sparkle.y} />
          ))}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              times: [0, 0.2, 0.8, 1],
            }}
          >
            <Heart className="w-32 h-32 text-white fill-white mb-8 mx-auto" />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowEmojis(true)}
            className="px-8 py-3 rounded-full bg-white text-pink-600 font-semibold text-xl flex items-center gap-2 mx-auto shadow-lg"
          >
            <Sparkles className="w-6 h-6" />
            Begin Magic
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] overflow-hidden relative bg-gradient-to-br from-pink-400 to-pink-600" onMouseMove={handleMouseMove}>
      {sparkles.map((sparkle) => (
        <SparkleEffect key={sparkle.id} x={sparkle.x} y={sparkle.y} />
      ))}

      {Array.from({ length: 8 }).map((_, i) => (
        <ColorBubble key={i} delay={i * 0.3} />
      ))}

      {Array.from({ length: 6 }).map((_, i) => (
        <FloatingEmoji key={`emoji-${i}`} emoji={emojis[i % emojis.length]} delay={i * 0.3} />
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.2, y: -50 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="absolute inset-0 flex items-center justify-center p-4"
        >
          <motion.div className="text-center text-white" initial={{ y: 20, rotateX: 90 }} animate={{ y: 0, rotateX: 0 }} transition={{ type: "spring", stiffness: 200 }}>
            <motion.div className="perspective-text">
              {Array.from(messages[step]).map((char, i) =>
                char === " " ? (
                  <span key={i} className="inline-block w-6" />
                ) : (
                  <motion.span
                    key={i}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={i}
                    className="inline-block text-4xl md:text-6xl font-bold"
                    style={{
                      textShadow: "0 0 20px rgba(255,255,255,0.2)",
                      fontFamily: "'Noto Color Emoji', sans-serif",
                    }}
                  >
                    {char}
                  </motion.span>
                )
              )}
            </motion.div>

            {step === messages.length - 1 && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.5,
                }}
                className="flex gap-4 justify-center items-center mt-12"
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: yesButtonScales[Math.min(noCount, yesButtonScales.length - 1)],
                  }}
                  className="px-8 py-4 rounded-full bg-white text-pink-500 font-bold text-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => setStep(0)}
                >
                  <Heart className="w-6 h-6 fill-pink-500" />
                  Yes! ❤️
                </motion.button>

                <motion.button
                  ref={noButtonRef}
                  animate={noButtonControls}
                  onHoverStart={handleNoButtonHover}
                  onClick={() => setNoCount((prev) => prev + 1)}
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold text-xl flex items-center gap-2 border border-white/20"
                  whileHover={{ scale: 1.1 }}
                >
                  <XCircle className="w-6 h-6" />
                  {noButtonMessages[Math.min(noCount, noButtonMessages.length - 1)]}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
