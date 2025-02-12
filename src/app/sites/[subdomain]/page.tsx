import Temp1 from "@/components/template/Temp1";
import React from "react";

const messages = [
  `Welcome, ok 👑`,
  `Your presence brightens my day...`,
  `Every moment is magical ✨`,
  `You're absolutely incredible 🌟`,
  `Together, we create perfection 🎵`,
  `Will you be my Valentine? 🌹`,
];

const moods = [
  "superHappy",
  "excited",
  "happy",
  "hopeful",
  "nervous",
  "question",
];

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

export default function Home() {
  const celebrationMediaUrl =
    "https://media.giphy.com/media/3o7TKz9bX9v9KzCnXK/giphy.gif";
  const celebrationMessage =
    "Congratulations! You have reached the end of this page! 🎉";
  return (
    <Temp1
      messages={messages}
      moods={moods}
      noButtonMessages={noButtonMessages}
      celebrationMediaUrl={celebrationMediaUrl}
      celebrationMessage={celebrationMessage}
    />
  );
}
