import { useLoaderData, Link } from "react-router-dom";
import { itemsClass } from "../mock/items";
import { XCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function Loader({ params }: any) {
  let item = itemsClass.getOneItem(params.id);
  return { item };
}

export function ItemModal() {
  const { item }: any = useLoaderData();

  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <section className="max-w-3xl m-auto">
      <div>
        <div className="relative w-full">
          {width < 835 && (
            <Link
              to={`/menu`}
              className="absolute right-0 m-4 text-white hover:text-green-400 transition duration-200"
            >
              <XCircle />
            </Link>
          )}
          <img
            src={item.image}
            alt="image de hamburguer"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-3 grid gap-3">
          <div className="flex justify-between">
            <div className="">
              <h2 className="font-bold text-lg">{item.name}</h2>
            </div>
            <div>
              {width > 835 && (
                <Link
                  to={`/menu`}
                  className="hover:text-green-400 transition duration-200"
                >
                  <XCircle />
                </Link>
              )}
            </div>
          </div>
          <p>{item.description}</p>
          {item.ingredients.length ? (
            <ul className="list-disc list-inside">
              {item.ingredients.map((ingredients: string) => (
                <li>{ingredients}</li>
              ))}
            </ul>
          ) : (
            <p>Não disponível</p>
          )}
          <strong className="block">R${item.value}</strong>
          <button
            type="button"
            className="w-full border p-5 hover:bg-green-400 hover:text-white transition duration-200"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>
  );
}
