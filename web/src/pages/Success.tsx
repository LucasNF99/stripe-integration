import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Success() {
  return (
    <main className="h-full px-2 mb-10 flex flex-col items-center justify-center">
      <Header
        title="Compra realizada com sucesso!"
        subTitle="Obrigado por sua compra." />

      <Link
        to="/"
        className="button"
      >
        Comprar novamente
      </Link>
    </main>
  );
}
