import { itemsClass } from "../mock/itemsController";
import { Carousel } from "../components/Carousel/Carousel";

export function HomePage() {
  const itemsOnPromotion: any = itemsClass.getPromotionItems();

  console.log(itemsOnPromotion);

  return (
    <section className="max-w-3xl m-auto">
      <div className="p-3">
        <h2>Promoção</h2>
      </div>
      <Carousel />
    </section>
  );
}
