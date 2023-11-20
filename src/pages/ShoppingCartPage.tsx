import { itemsClass } from "../mock/itemsController";
import { useLoaderData } from "react-router-dom";
import { MenuButton } from "../components/MenuButton";
import { ConfirmButton } from "../components/ConfirmButton";
import { useEffect, useState } from "react";

export function Loader() {
  let shopCart = itemsClass.getShoppingCart();
  return { shopCart };
}

function minimalHeight(height: number, width: number) {
  if (height <= 500) {
    console.log(window.innerHeight);
    return { height: `calc(500px - 6.125rem)` };
  } else if (width < 825) {
    return { height: "calc(100dvh - 6.125rem)" };
  } else {
    return { maxHeight: "calc(100dvh - 6.125rem)" };
  }
}

export function ShoppingCartPage() {
  const { shopCart }: any = useLoaderData();
  const [items, setItems] = useState(shopCart);
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  console.count("renderizou: ");

  const deleteItemFromCartList = (id: number) => {
    const index = items.findIndex((item: { id: number }) => item.id === id);
    let removedItems = itemsClass.removeItemFromCart(index).slice();
    setItems(removedItems);
  };

  const updateHeightandWidth = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  //  tentei mudar a quantidade de render. funcionou... mas somente quando a página é carregada pela primeira vez

  // const mainHeight = (document.body.onresize = () => {
  //   if (window.innerHeight <= 500) {
  //     console.log(window.innerHeight);
  //     return { height: `calc(500px - 6.125rem)` };
  //   } else if (window.innerWidth < 825) {
  //     return { height: "calc(100dvh - 6.125rem)" };
  //   } else {
  //     return { maxHeight: "calc(100dvh - 6.125rem)" };
  //   }
  // });

  // console.log(mainHeight())

  useEffect(() => {
    window.addEventListener("resize", updateHeightandWidth);
    return () => window.removeEventListener("resize", updateHeightandWidth);
  });

  let mainHeight = minimalHeight(height, width);

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
          <div className="flex flex-col gap-2 flex-grow overflow-y-auto">
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
          </div>
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
