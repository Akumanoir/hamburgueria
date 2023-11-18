// import { menuItems } from "../mock/menuItems"
import { Link, useLoaderData } from "react-router-dom";
import { MenuButton } from "../components/MenuButton";
import { itemsClass } from "../mock/itemsController";

export function Loader() {
  let menuItems = itemsClass.getItems();
  return { menuItems };
}


export function MenuPage() {
  const { menuItems }: any = useLoaderData();
  
  return (
    <main className="max-w-3xl m-auto">
      <div className="p-3">
        <h2>Cardápio</h2>
      </div>
      <div className="grid gap-2">
        {menuItems.length ? (
          <>
            {menuItems.map(
              (
                items: {
                  id: number;
                  image: string;
                  name: string;
                  value: number;
                },
                index: number
              ) => (
                <Link
                  to={`/lanchonete-hamburgueria/menu/${items.id}`}
                  key={index}
                >
                  <MenuButton
                    className="hover:border-green-400"
                    id={items.id}
                    image={items.image}
                    name={items.name}
                    value={items.value}
                  />
                </Link>
              )
            )}
          </>
        ) : (
          <p>Desculpe, não temos nada disponível!</p>
        )}
      </div>
    </main>
  );
}
