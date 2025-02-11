"use client"

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue, animate, useSpring } from "framer-motion";
import Image from "next/image";

const messages = [
  "Will you be my valentine?",
  "Nice try! 😏",
  "Too slow! 🏃‍♂️",
  "Catch me if you can! 🎯",
  "Nope, not today! 🙈",
  "Getting dizzy yet? 😵‍💫",
  "You'll never catch me! 🚀",
  "Keep trying! 🎮",
  "Maybe try the other button? 😉",
];

export default function ValentineProposal() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const buttonX = useSpring(0, { stiffness: 300, damping: 30 });
  const buttonY = useSpring(0, { stiffness: 300, damping: 30 });
  const [isEvading, setIsEvading] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current || !containerRef.current || isEvading) return;

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      if (!buttonRect || !containerRect) return;

      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      const distance = Math.hypot(e.clientX - buttonCenterX, e.clientY - buttonCenterY);

      if (distance < 150) {
        setIsEvading(true);
        evadeMouse(e.clientX, e.clientY, containerRect, buttonRect);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isEvading]);

  const evadeMouse = (mouseX, mouseY, containerRect, buttonRect) => {
    if (!buttonRef.current) return;

    let newX = buttonRect.x + (Math.random() - 0.5) * 300;
    let newY = buttonRect.y + (Math.random() - 0.5) * 300;

    newX = Math.min(Math.max(containerRect.left, newX), containerRect.right - buttonRect.width);
    newY = Math.min(Math.max(containerRect.top, newY), containerRect.bottom - buttonRect.height);

    buttonX.set(newX - buttonRect.x);
    buttonY.set(newY - buttonRect.y);

    setMessageIndex((prev) => (prev + 1) % messages.length);
    setTimeout(() => setIsEvading(false), 1000);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center bg-pink-50 overflow-hidden">
      <div className="w-80 p-6 rounded-3xl bg-white shadow-xl border-4 border-pink-200">
        <div className="flex flex-col items-center gap-6">
          <Image src="https://media.giphy.com/media/DaNoT1EDKptwk/giphy.gif?cid=ecf05e47zt4femabr9b25ij6z2plkx2aqbjdb4w0im7azsig&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Cute panda with heart eyes" width={200} height={200} className="w-40 h-40 object-contain" />
          <h1 className="text-xl font-bold text-center">{messages[messageIndex]}</h1>
          <div className="flex gap-4 items-center">
            <button onClick={() => setShowConfetti(true)} className="px-8 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
              Yes
            </button>
            <motion.button
              ref={buttonRef}
              style={{ x: buttonX, y: buttonY }}
              className="px-8 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              No
            </motion.button>
          </div>
        </div>
      </div>
      {showConfetti && (
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl text-center">🎉 Yay! Happy Valentine's Day! 💝</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
