import { itemsClass } from "../mock/itemsController";
import { useLoaderData } from "react-router-dom";
import { MenuButton } from "../components/MenuButton";
import { ConfirmButton } from "../components/ConfirmButton";
import { useState } from "react";

export function Loader() {
  let shopCart = itemsClass.getShoppingCart();
  return { shopCart };
}

export function ShoppingCartPage() {
  const { shopCart }: any = useLoaderData();
  const [items, setItems] = useState(shopCart);

  const deleteItem = (id: number) => {
    const index = items.findIndex((item: { id: number }) => item.id === id);
    let removedItems = itemsClass.removeItemFromCart(index).slice();
    setItems(removedItems);
  };

  console.log(items);
  // console.log(shopCart);

  return (
    <>
      {items.length ? (
        <main className="max-w-3xl m-auto relative">
          <div className="p-3">
            <h2>Carrinho</h2>
          </div>
          <div className="flex flex-col gap-2">
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
                  onAction={() => deleteItem(item.id)}
                />
              )
            )}
          </div>
          <div className="p-3 grid gap-2 w-full bg-white sticky bottom-0">
            <p className="p-1">
              Total: <strong>R${itemsClass.getTotalValue()}</strong>
            </p>
            <ConfirmButton text="Efetuar Compra" />
          </div>
        </main>
      ) : (
        <main className="max-w-3xl m-auto grid place-content-center h-96 text-center">
          <iframe
            src="https://giphy.com/embed/dcVfvQSQi3nYk"
            width="100%"
            height="100%"
            className="giphy-embed w-full"
            allowFullScreen
          ></iframe>
          <p>Não há itens no carrinho</p>
        </main>
      )}
    </>
  );
}
