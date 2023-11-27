import { itemsClass } from "../../mock/itemsController";
import { Link } from "react-router-dom"
import "./Carousel.css"


export function Carousel() {
  const itemsOnPromotion: any = itemsClass.getPromotionItems();

  console.log(itemsOnPromotion[0].promotiomCalc)

  return (
    <>
      <div className="wrapper slider">
        <div className="carousel slides">
          <div id="slider">
            <figure>
              {itemsOnPromotion.map(
                (items: {
                  image: string;
                  id: number;
                  name: string;
                  promotiomCalc: number;
                }) => (
                  <Link to={`/menu/${items.id}`}>
                    <img src={items.image} alt="" />
                  </Link>
                )
              )}
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
