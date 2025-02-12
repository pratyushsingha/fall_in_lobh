"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { ValentineTemplate } from "../types/valentine"

interface PreviewProps {
  template: ValentineTemplate
}

export function TemplatePreview({ template }: PreviewProps) {
  return (
    <Card className="w-full max-w-md p-6 bg-white shadow-lg">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-full aspect-square relative rounded-lg overflow-hidden">
          <Image
            src={template.gifs.default || "/placeholder.svg?height=400&width=400"}
            alt="Valentine Preview"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-900">
          {template.title || "Will you be my valentine?"}
        </h2>
        {template.buttons.subtitle && <p className="text-gray-600 text-center">{template.buttons.subtitle}</p>}
        <div className="flex gap-4">
          <Button className="bg-green-500 hover:bg-green-600">{template.buttons.yes || "Yes"}</Button>
          <Button variant="destructive">No</Button>
        </div>
        {template.phrases.length > 0 && (
          <div className="w-full mt-4 space-y-2">
            {template.phrases.map((phrase, index) => (
              <div key={index} className="p-2 bg-pink-50 rounded text-center">
                {phrase}
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

