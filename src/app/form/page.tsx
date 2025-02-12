"use client";

import { useState } from "react";
import { TemplateForm } from "@/components/template-form";
import { TemplatePreview } from "@/components/template-preview";
import type { ValentineTemplate } from "@/types/valentine";

export default function Page() {
  const [template, setTemplate] = useState<ValentineTemplate>({
    title: "Will you be my valentine?",
    gifs: {
      default: "",
      yes: "",
    },
    buttons: {
      yes: "Yes",
      yesResponse: "Yayyyy!!! I love you!",
      subtitle: "",
    },
    phrases: [],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Create Valentine Page for your loved one 🥰</h1>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2">
            <TemplateForm onChange={setTemplate} />
          </div>
          <div className="w-full lg:w-1/2 sticky top-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Preview</h2>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg flex justify-center">
              <TemplatePreview template={template} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
