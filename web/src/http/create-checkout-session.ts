type CheckoutSessionResponse = {
  sessionId: string;
};

export async function createCheckoutSession(
  productId: string,
  quantity: number
): Promise<CheckoutSessionResponse | { error: string }> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        quantity,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating checkout session check env variables:', error);
    return { error: 'Erro ao criar a sessão, tente mais tarde.' };
  }
}
