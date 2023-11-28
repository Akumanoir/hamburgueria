// import { menuItems } from "../mock/menuItems"
import { Link, useLoaderData } from "react-router-dom";
import { itemsClass } from "../mock/itemsController";
import { ItemWrapper } from "../components/ItemWrapper";
import { MenuButton } from "../components/ButtonComponents";

export function Loader() {
  let menuItems = itemsClass.getItems();
  return { menuItems };
}

export function MenuPage() {
  const { menuItems }: any = useLoaderData();

  console.log(menuItems)

  return (
    <section className="max-w-3xl m-auto">
      <div className="p-3">
        <h2>Cardápio</h2>
      </div>
      <ItemWrapper>
        {menuItems.length ? (
          <>
            {menuItems.map(
              (
                items: {
                  id: number;
                  image: string;
                  name: string;
                  value: number;
                  promotion: boolean;
                  promotionCalculation?: number;
                },
                index: number,
              ) => (
                <Link to={`/menu/${items.id}`} key={index}>
                  <MenuButton
                    className="hover:border-green-400"
                    id={items.id}
                    image={items.image}
                    name={items.name}
                    value={items.value}
                    promotion={items.promotion}
                    promotionValue={items.promotionCalculation}
                  />
                </Link>
              ),
            )}
          </>
        ) : (
          <p>Desculpe, não temos nada disponível!</p>
        )}
      </ItemWrapper>
    </section>
  );
}
