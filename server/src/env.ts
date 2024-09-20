import z from "zod";

const envSchema = z.object({
  STRIPE: z.string().url(),
})

export const env = envSchema.parse(process.env);