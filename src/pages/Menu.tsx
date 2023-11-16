// import { menuItems } from "../mock/menuItems" 
import { useLoaderData } from "react-router-dom";
import { MenuButton } from "../components/MenuButtons";
import { itemsClass } from "../mock/items";

export function Loader() {
  let menuItems = itemsClass.getItems();
  return { menuItems };
}

export function Menu() {

  const { menuItems }: any = useLoaderData();

  return (
    <section className="max-w-3xl m-auto">
      <div className="p-3">
        <h2>Cardápio</h2>
      </div>
      <div className="grid gap-2">
        {menuItems.length ? (
          <>
            {menuItems.map((items: {id: number, image: string, name: string, value: number}) => (
              <MenuButton 
                id = {items.id}
                image = {items.image}
                name = {items.name}
                value = {items.value}
              />
            ))}
          </>
        ) : (
          <p>Desculpe, não temos nada disponível!</p>
        )}
      </div>
    </section>
  );
}