import { z } from "zod";

export const websiteSchema = z.object({
  title: z.string().min(1, "Title is required"),
  gif_url: z.string().url("Invalid GIF URL"),
  yesBtnClickTxt: z.string().min(1, "Yes button click text is required"),
  yesBtnTxt: z.string().min(1, "Yes button text is required"),
  subtitle: z.string().optional(),
  noBtnPhrases: z
    .array(z.string())
    .nonempty("At least one 'No' button phrase is required"),
  webUrl: z.string().url("Invalid website URL"),
});
