type CheckoutSessionResponse = {
  sessionId: string
}
export async function createCheckoutSession(
  productId: string,
  quantity: number
): Promise<CheckoutSessionResponse> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/create-checkout-session`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        quantity,
      })
    }
  );
  const data = await response.json();
  return data
}