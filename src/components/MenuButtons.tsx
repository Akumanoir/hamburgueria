import { Link } from "react-router-dom"

interface MenuButtonProps {
  id: number,
  image: string,
  name: string,
  value: number
}

export function MenuButton({ id,  image, name, value }: MenuButtonProps) {
  return (
    <Link to={`/menu/${id}`} id={id.toString()} className="flex gap-2 border-y border-gray-200 h-24">
      <div className="w-52 h-full overflow-hidden">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="w-full flex flex-col p-2 h-full justify-between">
        <div className="text-left">
          <h2>{name}</h2>
        </div>
        <div className="text-left">
          <span>R${value}</span>
        </div>
      </div>
    </Link>
  );
}