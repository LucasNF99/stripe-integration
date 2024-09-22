import { z } from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { stripe } from '../../services/stripe';
import { env } from '../../env';

export const createCheckoutSessionRoute: FastifyPluginAsyncZod = async (app) => {
  app.post('/create-checkout-session', {
    schema: {
      body: z.object({
        productId: z.string(),
        quantity: z.number().min(1),
      }),
    },
  }, async (request, reply) => {
    try {
      const { productId, quantity } = request.body;
      const price = await stripe.prices.retrieve(productId);
      if (!price) {
        return reply.status(404).send({ error: 'Preço não encontrado' });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: price.id,
            quantity,
          },
        ],
        mode: 'payment',
        success_url: `${env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${env.CLIENT_URL}/cancel`,
      });

      reply.send({ sessionId: session.id });
    } catch (error) {
      console.error('Erro ao criar sessão de checkout:', error);
      reply.status(500).send({ error: 'Erro ao criar sessão de checkout' });
    }
  });
};
