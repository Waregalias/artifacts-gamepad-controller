import { z } from "zod";

const apiForm = z.object({
  apiKey: z.string().min(1, {
    message: "Api key required",
  }),
});

export const ApiFormSchema = apiForm;
