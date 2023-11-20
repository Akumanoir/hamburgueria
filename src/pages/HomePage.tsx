import { itemsClass } from "../mock/itemsController"
import { MenuButton } from "../components/MenuButton"
import { Link } from "react-router-dom"

export function HomePage() {
  const itemsOnPromotion: any = itemsClass.getPromotionItems()

  console.log(itemsOnPromotion)

  return (
      <section className="max-w-3xl m-auto">
        <h2>Promoção</h2>
        {itemsOnPromotion.map((items: any) => (
            <Link to={`/menu/${items.id}`} key={items.name}>
              <MenuButton
                id = {items.id}
                image = {items.image}
                name = {items.name}
                value = {items.value}
              />
            </Link>
          ))}
      </section>
  )
}