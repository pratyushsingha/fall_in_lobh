"use client";
import { TemplateForm } from "@/components/template-form";
import { TemplatePreview } from "@/components/template-preview";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const CreateWebPage = () => {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template") || "1";
  const [template, setTemplate] = useState<[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Create Valentine Page for your loved one 🥰
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <TemplateForm template={template} setTemplate={setTemplate} />
          <div className="sticky top-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Preview
            </h2>
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
              <TemplatePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWebPage;
