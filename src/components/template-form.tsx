"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { ValentineTemplate } from "../types/valentine"

interface TemplateFormProps {
  onChange: (template: ValentineTemplate) => void
}

export function TemplateForm({ onChange }: TemplateFormProps) {
  const [template, setTemplate] = useState<ValentineTemplate>({
    title: "",
    gifs: {
      default: "",
      yes: "",
    },
    buttons: {
      yes: "",
      yesResponse: "",
      subtitle: "",
    },
    phrases: [],
  })

  const updateTemplate = (updates: Partial<ValentineTemplate>) => {
    const newTemplate = { ...template, ...updates }
    setTemplate(newTemplate)
    onChange(newTemplate)
  }

  const addPhrase = () => {
    updateTemplate({ phrases: [...template.phrases, ""] })
  }

  const updatePhrase = (index: number, value: string) => {
    const newPhrases = [...template.phrases]
    newPhrases[index] = value
    updateTemplate({ phrases: newPhrases })
  }

  const removePhrase = (index: number) => {
    const newPhrases = template.phrases.filter((_, i) => i !== index)
    updateTemplate({ phrases: newPhrases })
  }

  return (
    <div className="space-y-6 p-6 bg-pink-50 rounded-lg">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Create Valentine Page</h2>
        <p className="text-gray-600">Start creating your personalized valentine page here. Be creative!</p>
      </div>

      <Card className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={template.title}
            onChange={(e) => updateTemplate({ title: e.target.value })}
            placeholder="Will you be my valentine?"
          />
        </div>

        <Separator className="my-4" />

        <div className="space-y-4">
          <h3 className="font-semibold">GIF URLs</h3>
          <div className="space-y-2">
            <Label htmlFor="defaultGif">Default GIF URL</Label>
            <Input
              id="defaultGif"
              value={template.gifs.default}
              onChange={(e) => updateTemplate({ gifs: { ...template.gifs, default: e.target.value } })}
              placeholder="https://giphy.com/..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="yesGif">Yes Response GIF URL</Label>
            <Input
              id="yesGif"
              value={template.gifs.yes}
              onChange={(e) => updateTemplate({ gifs: { ...template.gifs, yes: e.target.value } })}
              placeholder="https://giphy.com/..."
            />
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-4">
          <h3 className="font-semibold">Button Settings</h3>
          <div className="space-y-2">
            <Label htmlFor="yesText">Yes Button Text</Label>
            <Input
              id="yesText"
              value={template.buttons.yes}
              onChange={(e) => updateTemplate({ buttons: { ...template.buttons, yes: e.target.value } })}
              placeholder="Yes"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="yesResponse">Yes Click Response</Label>
            <Input
              id="yesResponse"
              value={template.buttons.yesResponse}
              onChange={(e) => updateTemplate({ buttons: { ...template.buttons, yesResponse: e.target.value } })}
              placeholder="Yayyyy!!! I love you!"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subtitle">Subtitle (Optional)</Label>
            <Input
              id="subtitle"
              value={template.buttons.subtitle || ""}
              onChange={(e) => updateTemplate({ buttons: { ...template.buttons, subtitle: e.target.value } })}
              placeholder="Please say yes..."
            />
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">No Button Phrases</h3>
            <Button onClick={addPhrase} size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Phrase
            </Button>
          </div>
          <div className="space-y-2">
            {template.phrases.map((phrase, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={phrase}
                  onChange={(e) => updatePhrase(index, e.target.value)}
                  placeholder="Enter phrase..."
                />
                <Button onClick={() => removePhrase(index)} variant="destructive" size="icon">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}

