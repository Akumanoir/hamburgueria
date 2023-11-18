import { Store, MenuSquare, ShoppingCart, Info } from "lucide-react";
import { Outlet, Link } from "react-router-dom"

// export async function loader() {
//   const items = itemsClass.getItems;
//   return { items };
// }

export default function App() {

  return (
    <>
      <header className="px-3 py-5 flex justify-between border-b-2 border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-14">
            <img
              src="/icon.png"
              alt="Ícone de um hamburguer"
              className="object-cover w-full"
            />
          </div>
          <h1 className="font-bold">Hamburgueria vegana</h1>
        </div>
        <nav>
          <ul className="flex gap-3 items-center h-full">
            <li className="cursor-pointer" title="Início">
              <Link to={`/lanchonete-hamburgueria`}>
                <Store />
              </Link>
            </li>
            <li className="cursor-pointer" title="Cardápio">
              <Link to={`menu`}>
                <MenuSquare />
              </Link>
            </li>
            <li className="cursor-pointer" title="Carrinho">
              <Link to={`ShoppingCart`}>
                <ShoppingCart />
              </Link>
            </li>
            <li className="cursor-pointer" title="Sobre nós">
              <Link to={`Info`}>
                <Info />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
