"use client";

import { useState } from "react";
import { TemplateForm } from "@/components/template-form";
import { TemplatePreview } from "@/components/template-preview";
import type { ValentineTemplate } from "@/types/valentine";
import Temp1 from "@/components/template/Temp1";
import { div } from "framer-motion/client";
import PreWindow from "@/components/PreWindow";

export default function Page() {
  const classname = "px-1 overflow-hidden h-[300] w-[300] md:h-[600] md:w-[300] translate-x-7 md:translate-x-0";
  const messages = [
    `Welcome,bro 👑`,
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
  const celebrationMediaUrl =
    "https://media.giphy.com/media/3o7TKz9bX9v9KzCnXK/giphy.gif";
  const celebrationMessage =
    "Congratulations! You have reached the end of this page! 🎉";
  return (
    // <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 py-8">
    //   <div className="container mx-auto px-4">
    //     <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
    //       Create Valentine Page for your loved one 🥰
    //     </h1>
    //     <div className="grid md:grid-cols-2 gap-8">
    //       <TemplateForm onChange={setTemplate} />
    //       <div className="sticky top-8">
    //         <h2 className="text-xl font-semibold mb-4 text-gray-700">Preview</h2>
    //         <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
    //           <TemplatePreview template={template} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="mx-auto">
      <p>hi guys</p>
      <div className="grid grid-cols-2  md:grid-cols-4 overflow-hidden md:h-[600] mx-auto">
        {/* <div className="flex md:h-[600] mx-auto space-x-9 justify-center"> */}
        <div className={classname}>
          <PreWindow>
            <Temp1
              messages={messages}
              moods={moods}
              prev={true}
              noButtonMessages={noButtonMessages}
              celebrationMediaUrl={celebrationMediaUrl}
              celebrationMessage={celebrationMessage}
            />
          </PreWindow>
        </div>
        <div className={classname}>
          <PreWindow>
            <Temp1
              messages={messages}
              moods={moods}
              prev={true}
              noButtonMessages={noButtonMessages}
              celebrationMediaUrl={celebrationMediaUrl}
              celebrationMessage={celebrationMessage}
            />
          </PreWindow>
        </div>
        <div className={classname}>
          <PreWindow>
            <Temp1
              messages={messages}
              moods={moods}
              prev={true}
              noButtonMessages={noButtonMessages}
              celebrationMediaUrl={celebrationMediaUrl}
              celebrationMessage={celebrationMessage}
            />
          </PreWindow>
        </div>
        <div className={classname}>
          <PreWindow>
            <Temp1
              messages={messages}
              moods={moods}
              prev={true}
              noButtonMessages={noButtonMessages}
              celebrationMediaUrl={celebrationMediaUrl}
              celebrationMessage={celebrationMessage}
            />
          </PreWindow>
        </div>
      </div>
    </div>
  );
}
