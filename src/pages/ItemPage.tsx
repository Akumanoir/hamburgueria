import { useLoaderData, Link } from "react-router-dom";
import { itemsClass } from "../mock/itemsController";
import { XCircle } from "lucide-react";
import { ConfirmButton } from "../components/ButtonComponents";
import { Section } from "../components/Section";

export function Loader({ params }: any) {
  let item = itemsClass.getOneItem(params.id);
  return { item };
}

export function ItemPage() {
  const { item }: any = useLoaderData();

  return (
    <Section className="max-w-3xl m-auto flex flex-col">
      <section className="relative w-full">
        <img
          src={item.image}
          alt="image de hamburguer"
          className="object-cover w-full h-full  max-h-[255px]"
        />
      </section>
      <section className="p-3 flex flex-col gap-3 flex-grow">
        <div className="flex justify-between">
          <div className="">
            <h2 className="font-bold text-lg">{item.name}</h2>
          </div>
          <div>
            <Link
              to={`/menu`}
              className="hover:text-green-400 transition duration-200"
            >
              <XCircle />
            </Link>
          </div>
        </div>
        <p>{item.description}</p>
        {item.ingredients.length ? (
          <ul className="list-disc list-inside">
            {item.ingredients.map((ingredients: string, position: number) => (
              <li key={position}>{ingredients}</li>
            ))}
          </ul>
        ) : (
          <p>Não disponível</p>
        )}
      </section>
      <section className="p-3 grid gap-3">
        <strong className="block">R${item.value}</strong>
        <ConfirmButton
          text="Adicionar ao carrinho"
          onAction={() =>
            itemsClass.createShoppingCart(
              item.id,
              item.image,
              item.name,
              item.value
            )
          }
        />
      </section>
    </Section>
  );
}
