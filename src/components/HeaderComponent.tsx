import { Store, MenuSquare, ShoppingCart, Info } from "lucide-react";
import { Link } from "react-router-dom";

export function HeaderComponent() {
  return (
    <header className="px-3 py-5 flex justify-between border-b-2 border-gray-200">
      <div className="flex items-center gap-2">
        <div className="w-14">
          <Link to={``}>
            <img
              src="/hamburgueria/icon.png"
              alt="Ícone de um hamburguer"
              className="object-cover w-full"
            />
          </Link>
        </div>
        <h1 className="font-bold">Hamburgueria</h1>
      </div>
      <nav>
        <ul className="flex gap-3 items-center h-full">
          <li
            className="cursor-pointer hover:text-green-400 transition duration-200"
            title="Início"
          >
            <Link to={``}>
              <Store />
            </Link>
          </li>
          <li
            className="cursor-pointer hover:text-green-400 transition duration-200"
            title="Cardápio"
          >
            <Link to={`menu`}>
              <MenuSquare />
            </Link>
          </li>
          <li
            className="cursor-pointer hover:text-green-400 transition duration-200"
            title="Carrinho"
          >
            <Link to={`ShoppingCart`}>
              <ShoppingCart />
            </Link>
          </li>
          <li
            className="cursor-pointer hover:text-green-400 transition duration-200"
            title="Sobre nós"
          >
            <Link to={`Info`}>
              <Info />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
