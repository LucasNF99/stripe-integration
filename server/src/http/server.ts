import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { env } from "../env";
import { createCheckoutSessionRoute } from "./routes/create-checkout";

const app = fastify().withTypeProvider<ZodTypeProvider>();
app.register(fastifyCors, {
  origin: '*'
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);


app.register(createCheckoutSessionRoute);


app.listen({
  port: +env.PORT
}).then(() => {
  console.log('Server running')
})