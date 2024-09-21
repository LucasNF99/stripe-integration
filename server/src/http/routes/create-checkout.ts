import { z } from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { stripe } from '../../services/stripe';

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

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Produto Teste',
              },
              unit_amount: 2000,
            },
            quantity,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
      });

      reply.send({ sessionId: session.id });
    } catch (error) {
      console.log(error)
      reply.status(500).send({ error: 'Erro ao criar sessão de checkout' });
    }
  });
};
