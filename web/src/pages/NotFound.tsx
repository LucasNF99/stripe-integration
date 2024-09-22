import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-5">
      <h1 className="text-xl">
        <strong>404</strong>
        Página não encontrada
      </h1>
      <Link
        to="/"
        className="button">
        Voltar
      </Link>
    </div>
  )
}
