import { itemsClass } from "../mock/itemsController";
import { useLoaderData } from "react-router-dom";
import { ItemWrapper } from "../components/ItemWrapper";
import { useEffect, useState } from "react";
import { ConfirmButton, MenuButton } from "../components/ButtonComponents";

export function Loader() {
  let shopCart = itemsClass.getShoppingCart();
  return { shopCart };
}

function minimalHeight( width: number) {
  if (width < 825) {
    return { height: "calc(100dvh - 10.375rem)" };
  } else {
    return { maxHeight: "calc(100dvh - 10.375rem)" };
  }
}

export function ShoppingCartPage() {
  const { shopCart }: any = useLoaderData();
  const [items, setItems] = useState(shopCart);
  const [width, setWidth] = useState(window.innerWidth);

  const deleteItemFromCartList = (id: number) => {
    const index = items.findIndex((item: { id: number }) => item.id === id);
    let removedItems = itemsClass.removeItemFromCart(index).slice();
    setItems(removedItems);
  };

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  let mainHeight = minimalHeight(width);

  return (
    <>
      {items.length ? (
        <section
          className="max-w-3xl m-auto flex flex-col scroll-smooth"
          style={mainHeight}
        >
          <div className="p-3">
            <h2>Carrinho</h2>
          </div>
          <ItemWrapper>
            {items.map(
              (
                item: {
                  id: number;
                  image: string;
                  name: string;
                  value: number;
                },
                index: number
              ) => (
                <MenuButton
                  key={index}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  value={item.value}
                  shoppingCart
                  onAction={() => deleteItemFromCartList(item.id)}
                />
              )
            )}
          </ItemWrapper>
          <div className="p-3 grid gap-2">
            <p className="p-1">
              Total: <strong>R${itemsClass.getTotalValue()}</strong>
            </p>
            <ConfirmButton
              text="Efetuar Compra"
              className="text-green-400 border-green-400"
            />
          </div>
        </section>
      ) : (
        <section className="max-w-3xl m-auto grid place-content-center h-96 text-center">
          <iframe
            src="https://giphy.com/embed/dcVfvQSQi3nYk"
            width="100%"
            height="100%"
            className="giphy-embed w-full"
            allowFullScreen
          ></iframe>
          <p>Não há itens no carrinho</p>
        </section>
      )}
    </>
  );
}
