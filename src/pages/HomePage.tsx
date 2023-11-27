import { itemsClass } from "../mock/itemsController"
import { ItemWrapper } from "../components/ItemWrapper"
import { Link } from "react-router-dom"
import { MenuButton } from "../components/ButtonComponents"

export function HomePage() {
  const itemsOnPromotion: any = itemsClass.getPromotionItems()

  console.log(itemsOnPromotion)

  return (
    <section className="max-w-3xl m-auto">
      <div className="p-3">
        <h2>Promoção</h2>
      </div>
      <ItemWrapper>
        {itemsOnPromotion.map((items: any) => (
          <Link to={`/menu/${items.id}`} key={items.name}>
            <MenuButton
              className="hover:border-green-400"
              id={items.id}
              image={items.image}
              name={items.name}
              value={items.value}
            />
          </Link>
        ))}
      </ ItemWrapper>
    </section>
  );
}