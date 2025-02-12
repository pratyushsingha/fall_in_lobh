"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ValentineTemplate } from "../types/valentine";

interface PreviewProps {
  template: ValentineTemplate;
}

export function TemplatePreview({ template }: PreviewProps) {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
        <div className="w-full h-full overflow-y-auto px-4 py-6">
          <Card className="w-full bg-transparent shadow-none">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full aspect-square relative rounded-lg overflow-hidden">
                <Image src={template.gifs.default || "/placeholder.svg?height=400&width=400"} alt="Valentine Preview" fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900">{template.title || "Will you be my valentine?"}</h2>
              {template.buttons.subtitle && <p className="text-sm text-gray-600 text-center">{template.buttons.subtitle}</p>}
              <div className="flex gap-4">
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  {template.buttons.yes || "Yes"}
                </Button>
                <Button size="sm" variant="destructive">
                  No
                </Button>
              </div>
              {template.phrases.length > 0 && (
                <div className="w-full mt-4 space-y-2">
                  {template.phrases.map((phrase, index) => (
                    <div key={index} className="p-2 bg-pink-50 rounded text-center text-sm">
                      {phrase}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
