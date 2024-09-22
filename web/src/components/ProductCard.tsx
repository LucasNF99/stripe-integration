import { Link } from "react-router-dom";
import { Rating } from "./Rating";

type IProductCardProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  divide: number;
  fullPrice: number;
  soldOut?: boolean;
  rating: number;
};

export function ProductCard({
  id,
  image,
  name,
  price,
  divide,
  fullPrice,
  soldOut = false,
  rating,
}: IProductCardProps) {

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const formattedInstallmentPrice = (fullPrice / divide).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <article className={`shadow-xl rounded-md text-zinc-950 h-full max-w-xs bg-white   w-full ${soldOut ? 'opacity-70' : ''}`}>
      <img className="rounded-t-md object-cover " src={image} alt={name} loading="lazy" />
      <div className="py-2 rounded-md   px-4 flex flex-col gap-2 border-t justify-between ">

        <div>
          <h3 className="leading-tight">{name}</h3>
          <p className="leading-tight tracking-tight">
            <strong>{formattedPrice} no Pix</strong>
          </p>
          <p className="leading-tight tracking-tight">
            <small>
              ou {divide}x de {formattedInstallmentPrice}
            </small>
          </p>
          <Rating rating={rating} />
        </div>
        {soldOut ? (
          <button
            type="button"
            disabled
            className="bg-gray-400 font-bold text-center px-4 py-2 rounded-md text-white cursor-not-allowed">
            Esgotado
          </button>
        ) : (
          <Link
            to={`/product/${id}`}
            className="button">
            Comprar
          </Link>
        )}
      </div>
    </article>
  );
}
