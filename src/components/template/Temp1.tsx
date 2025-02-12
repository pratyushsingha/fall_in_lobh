"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Heart, Sparkles, XCircle, Code } from "lucide-react";
import Image from "next/image";

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

interface Temp1Props {
  messages: string[];
  moods: string[];
  noButtonMessages: string[];
  celebrationMediaUrl: string;
  celebrationMessage: string;
}

const Logo = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="fixed top-6 right-6 z-50"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
    >
      <Code className="w-6 h-6 text-white" />
      <span className="text-white font-bold">Zenux Studios</span>
    </motion.div>
  </motion.div>
);

const EmotiveFace = ({
  mood = "happy",
  noCount = 0,
}: {
  mood?: string;
  noCount?: number;
}) => {
  const expressions: Record<string, string> = {
    superHappy: "🥰",
    happy: "😊",
    excited: "😍",
    hopeful: "🤗",
    nervous: "😅",
    question: "🤔",
    sad1: "😕",
    sad2: "😢",
    sad3: "😭",
    sad4: "🥺",
    celebration: "🤩",
  };

  const getMoodEmoji = () => {
    if (mood === "celebration") return expressions.celebration;
    if (noCount > 0) {
      if (noCount >= 10) return expressions.sad4;
      if (noCount >= 7) return expressions.sad3;
      if (noCount >= 4) return expressions.sad2;
      return expressions.sad1;
    }
    if (mood === "question") return expressions.question;
    return expressions[mood];
  };

  return (
    <motion.div
      initial={false}
      animate={
        noCount === 0
          ? {
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }
          : {
              rotate: [0, -10, 0],
              scale: [1, 0.9, 1],
            }
      }
      transition={{ duration: 0.5 }}
      className="text-6xl mb-6"
    >
      {getMoodEmoji()}
    </motion.div>
  );
};

const FloatingEmoji = ({
  emoji,
  delay = 0,
}: {
  emoji: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ y: "100vh", x: Math.random() * window.innerWidth, rotate: 0 }}
    animate={{
      y: "-100vh",
      x: [
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
      ],
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

const ColorBubble = ({ delay = 0 }: { delay?: number }) => (
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

const CelebrationPopup = ({
  onClose,
  celebrationMediaUrl,
  celebrationMessage,
}: {
  onClose: () => void;
  celebrationMediaUrl: string;
  celebrationMessage: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      animate={{
        scale: 1,
        rotate: 0,
        y: [0, -10, 0],
      }}
      exit={{ scale: 0, rotate: 20 }}
      transition={{
        type: "spring",
        damping: 12,
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      }}
      className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl relative overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "linear-gradient(45deg, #ff69b4, #ff1493)",
            "linear-gradient(45deg, #ff1493, #ff69b4)",
            "linear-gradient(45deg, #ff69b4, #ff1493)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="text-center relative">
        <EmotiveFace mood="celebration" />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 360] }}
          transition={{ type: "spring", damping: 8, delay: 0.2 }}
          className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden"
        >
          <Image
            src={celebrationMediaUrl}
            alt="Celebration"
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Yay! 🎉</h2>
          <p className="text-gray-600 text-lg mb-6">{celebrationMessage}</p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                delay: 0.7 + i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-3xl"
            >
              {["💝", "✨", "💖", "🎵", "🌹"][i]}
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-2 bg-pink-500 text-white rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-colors"
          onClick={onClose}
        >
          Continue Celebrating 🎉
        </motion.button>
      </div>
    </motion.div>
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

export default function Temp1({
  messages,
  moods,
  noButtonMessages,
  celebrationMediaUrl,
  celebrationMessage,
}: Temp1Props) {
  const [step, setStep] = useState(0);
  const [showEmojis, setShowEmojis] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [noCount, setNoCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonControls = useAnimation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const emojis = ["💖", "✨", "🌹", "💝", "🎵", "🦋", "🌈", "💫", "🎀"];

  const yesButtonScales = [1, 1.1, 1.2, 1.3, 1.4];

  useEffect(() => {
    if (showEmojis) {
      const timer = setInterval(() => {
        setStep((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [showEmojis, messages.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (Math.random() > 0.8) {
      const newSparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSparkles((prev) => [...prev.slice(-5), newSparkle]);
    }
    setMousePos({ x: e.clientX, y: e.clientY });
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
      <div
        className="min-h-[100dvh] flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-pink-400 to-pink-600"
        onMouseMove={handleMouseMove}
      >
        <Logo />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center relative"
        >
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
    <div
      className="min-h-[100dvh] overflow-hidden relative bg-gradient-to-br from-pink-400 to-pink-600"
      onMouseMove={handleMouseMove}
    >
      <Logo />
      {sparkles.map((sparkle) => (
        <SparkleEffect key={sparkle.id} x={sparkle.x} y={sparkle.y} />
      ))}

      {Array.from({ length: 8 }).map((_, i) => (
        <ColorBubble key={i} delay={i * 0.3} />
      ))}

      {Array.from({ length: 6 }).map((_, i) => (
        <FloatingEmoji
          key={`emoji-${i}`}
          emoji={emojis[i % emojis.length]}
          delay={i * 0.3}
        />
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
          <motion.div
            className="text-center text-white"
            initial={{ y: 20, rotateX: 90 }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <EmotiveFace mood={moods[step]} noCount={noCount} />
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
                    scale:
                      yesButtonScales[
                        Math.min(noCount, yesButtonScales.length - 1)
                      ],
                  }}
                  className="px-8 py-4 rounded-full bg-white text-pink-500 font-bold text-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => setShowCelebration(true)}
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
                  {
                    noButtonMessages[
                      Math.min(noCount, noButtonMessages.length - 1)
                    ]
                  }
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showCelebration && (
          <CelebrationPopup
            onClose={() => setShowCelebration(false)}
            celebrationMediaUrl={celebrationMediaUrl}
            celebrationMessage={celebrationMessage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
