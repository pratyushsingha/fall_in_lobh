import { z } from "zod";

export const websiteSchema = z.object({
  title: z.string().min(1, "Title cannot be empty"),
  moods: z.array(z.string().min(1, "Mood cannot be empty")),
  messages: z.array(z.string().min(1, "Phrase cannot be empty")),
  noButtonMessages: z.array(z.string().min(1, "Phrase cannot be empty")),
  celebrationMediaUrl: z.string().url("Please enter a valid URL"),
  celebrationMessage: z.string().min(1, "Message cannot be empty"),
  webUrl: z.string().url("Invalid website URL"),
});
