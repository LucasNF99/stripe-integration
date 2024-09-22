import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { createCheckoutSession } from "../http/create-checkout-session";
import { LoaderCircle } from "lucide-react";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export function BuyProductForm({ productId }: { productId: string }) {
  const [quant, setQuant] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleCheckout() {
    setIsLoading(true);
    if (quant > 0 && selectedSize) {
      const response = await createCheckoutSession(productId, quant);

      const stripe = await stripePromise;

      if (stripe) {
        const { sessionId } = response;
        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
          console.error('Erro no redirecionamento:', error);
        }
      }
    }
    setIsLoading(false);
  }

  const isCheckoutDisabled = quant < 1 || !selectedSize;

  return (
    <form>
      <p className="mb-2">Selecione um tamanho: </p>
      <div className="flex gap-2 flex-wrap max-w-96">
        {['34', '36', '38', '40', '42', '44', '46', '48'].map((size) => (
          <button
            type="button"
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-4 transition-all py-2 border hover:border-zinc-900 rounded-md ${selectedSize === size ? 'bg-gray-200 border-zinc-950 font-bold' : ''}`}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <button
          type="button"
          onClick={() => setQuant((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 border border-zinc-800 rounded-md transition-all hover:bg-zinc-950 hover:text-white"
        >
          -
        </button>
        <div className="px-4 py-2 border border-zinc-800 rounded-md">{quant}</div>
        <button
          type="button"
          onClick={() => setQuant((prev) => prev + 1)}
          className="px-4 py-2 border border-zinc-800 rounded-md transition-all hover:bg-zinc-950 hover:text-white"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        disabled={isCheckoutDisabled || isLoading}
        className={`button flex justify-center items-center mt-4 w-full ${isCheckoutDisabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? (
          <>
            Carregando <LoaderCircle className="animate-spin ml-2" />
          </>
        ) : (
          'Finalizar Compra'
        )}
      </button>
    </form>
  );
}
