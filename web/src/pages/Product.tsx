import { Link, useParams } from "react-router-dom";
import { ProductCarrousel } from "../components/ProductCarrousel";
import { mockProducts } from "../data/productData";
import { Header } from "../components/Header";
import { NotFound } from "./NotFound";
import { BuyProductForm } from "../components/BuyProductForm";
import { Rating } from "../components/Rating";

export function Product() {
  const params = useParams<{ productId: string }>();
  const productId = params.productId ?? '';
  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    return <NotFound />;
  }

  const formattedPrice = product?.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const formattedInstallmentPrice = (product.fullPrice / product.divide).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });



  return (
    <main className="h-full px-2 mb-10">
      <Header title="Finalize sua compra" size="sm" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 justify-items-stretch max-w-7xl  mx-auto">
        <div>
          <ProductCarrousel images={product.showCaseImages ?? []} />
        </div>


        <div className="flex flex-col  bg-zinc-100 text-zinc-950 rounded-md px-8 py-4">
          <div className="flex flex-col mb-4">
            <h1 className="text-3xl font-bold leading-tight">{product.name}</h1>
            <Rating rating={product.rating} />
            <p className="leading-tight tracking-tight text-lg">
              <strong>{formattedPrice} no Pix</strong>
            </p>
            <p className="leading-tight tracking-tight">
              <small>
                ou {product.divide}x de <strong>{formattedInstallmentPrice}</strong>
              </small>
            </p>
            <p className="my-2">Descrição:</p>
            <p className="text-lg tracking-tight leading-tight">{product.description}</p>
          </div>
          <BuyProductForm productId={productId} />
          <Link
            to="/"
            className=" mt-1 ml-auto border font-bold border-zinc-900 bg-transparent py-2 px-4 rounded-md transition-all hover:bg-zinc-900 hover:text-white">
            Voltar
          </Link>
        </div>
      </div>
    </main>
  );
}
