import { itemsClass } from "../mock/itemsController";
import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export function HomePage() {
  const items = itemsClass.getItems();

  let itemsOnPromotion: any = [];

  items.map((item: { promotion: boolean }) => {
    if (item.promotion === true) {
      itemsOnPromotion.push(item);
    }
  });

  const matches = useMediaQuery("(max-width:725px)");

  const height = () => {
    if (matches) {
      return { height: "calc(100dvh - 220px)" };
    }
  };

  return (
    <section className="max-w-3xl m-auto">
      <div className="p-3">
        <h2>Promoção</h2>
      </div>
      <Carousel
        autoplay
        loop
        transition={{ duration: 2 }}
        className="h-[470px] rounded-xl shadow-md"
        style={height()}
      >
        {itemsOnPromotion.map(
          (
            items: {
              id: number;
              image: string;
              name: string;
              promotionCalculation: number;
              value: number;
            },
            index: number
          ) => (
            <Link
              to={`/menu/${items.id}`}
              className="relative w-full h-full"
              key={index}
            >
              <img
                src={items.image}
                className="object-cover w-full h-full"
                alt=""
              />
              <div className="absolute bottom-0 w-full px-3 pb-9 text-white bg-gradient-to-t from-green-400">
                <h2 className=" text-3xl">{items.name}</h2>
                <p className="text-xl indent-3">
                  <s>R${items.value}</s>{" "}
                  <strong className="text-3xl text-yellow-500">
                    R${items.promotionCalculation}
                  </strong>
                </p>
              </div>
            </Link>
          )
        )}
      </Carousel>
    </section>
  );
}
