"use client";

import Iphone15Pro from "./magicui/iphone-15-pro";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import PreWindow from "./PreWindow";
import Temp1 from "./template/Temp1";

// const classname = "px-1 overflow-hidden h-[300] w-[300] md:h-[600] md:w-[300] translate-x-7 md:translate-x-0";
const messages = [
  `Welcome,bro 👑`,
  `Your presence brightens my day...`,
  `Every moment is magical ✨`,
  `You're absolutely incredible 🌟`,
  `Together, we create perfection 🎵`,
  `Will you be my Valentine? 🌹`,
];

const moods = ["superHappy", "excited", "happy", "hopeful", "nervous", "question"];

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
const celebrationMediaUrl = "https://media.giphy.com/media/3o7TKz9bX9v9KzCnXK/giphy.gif";
const celebrationMessage = "Congratulations! You have reached the end of this page! 🎉";

export function TemplatePreview({ template }) {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute overflow-hidden z-60"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg overflow-hidden z-90"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg overflow-hidden z-60"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg overflow-hidden z-60"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
        <div className="overflow-hidden w-full overflow-y-auto py-4z bg-pink-500 z-20">

            <Temp1
              messages={messages}
              moods={moods}
              prev={true}
              noButtonMessages={noButtonMessages}
              celebrationMediaUrl={celebrationMediaUrl}
              celebrationMessage={celebrationMessage}
            />

        </div>
      </div>
    </div>
  );
}

// import Iphone15Pro from "@/registry/magicui/iphone-15-pro";

// export function TemplatePreview() {
//   return (
//     <div className="relative">
//       <Iphone15Pro className="size-full">
//         <Temp1
//           messages={messages}
//           moods={moods}
//           prev={true}
//           noButtonMessages={noButtonMessages}
//           celebrationMediaUrl={celebrationMediaUrl}
//           celebrationMessage={celebrationMessage}
//         />
//       </Iphone15Pro>
//     </div>
//   );
// }
