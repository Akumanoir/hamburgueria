import { Store, MenuSquare, ShoppingCart, Info } from "lucide-react";

export default function App() {

  return (
    <>
      <header className="p-3 flex justify-between">
        <div className="flex items-end gap-2">
          <div className="w-14">
            <img
              src="hamburguer-icon.png"
              alt="Ícone de um hamburguer"
              className="object-cover w-full"
            />
          </div>
          <h1 className="font-bold">Hamburgueria vegana</h1>
        </div>
        <nav>
          <ul className="flex gap-3 items-end h-full">
            <li className="cursor-pointer" title="Início">
              <Store />
            </li>
            <li className="cursor-pointer" title="Cardápio">
              <MenuSquare />
            </li>
            <li className="cursor-pointer" title="Carrinho">
              <ShoppingCart />
            </li>
            <li className="cursor-pointer" title="Sobre nós">
              <Info />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Inicio</h1>
      </main>
    </>
  );
}
