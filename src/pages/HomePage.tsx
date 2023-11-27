import { itemsClass } from "../mock/itemsController"
import { MenuButton } from "../components/MenuButton"
import { Link } from "react-router-dom"

export function HomePage() {
  const itemsOnPromotion: any = itemsClass.getPromotionItems()

  console.log(itemsOnPromotion)

  return (
    <section className="max-w-3xl m-auto">
      <div className="p-3">
        <h2>Promoção</h2>
      </div>
      <div className="grid gap-2">
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
      </div>
    </section>
  );
}