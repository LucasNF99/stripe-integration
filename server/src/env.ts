import z from "zod";

const envSchema = z.object({
  PORT: z.string(),
  STRIPE_PUBLISHABLE_KEY: z.string(),
  STRIPE_SECRET_KEY: z.string(),
})

export const env = envSchema.parse(process.env);