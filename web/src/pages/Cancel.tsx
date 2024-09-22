import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Cancel() {
  return (
    <main className="h-full px-2 mb-10 flex flex-col items-center justify-center">
      <Header
        title="Ah não, vi que cancelou sua compra!"
        subTitle="Encontre um novo produto" />

      <Link
        to="/"
        className="button"
      >
        Comprar outro produto
      </Link>
    </main>
  );
}
