import { Trash } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: any;
  image: string;
  name: string;
  value: number;
  shoppingCart?: boolean;
  onAction?: () => void;
}

export function MenuButton({
  id,
  image,
  name,
  value,
  shoppingCart = false,
  onAction,
  ...rest
}: MenuButtonProps) {
  return (
    <div
      id={id.toString()}
      className={twMerge(
        "flex gap-2 border border-y-gray-200 h-24 border-x-transparent transition duration-200",
        rest.className
      )}
    >
      <div className="w-52 h-full overflow-hidden">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="w-full flex flex-col p-2 h-full justify-between">
        <div className="text-left">
          <h2>{name}</h2>
        </div>
        <div className="text-left flex justify-between">
          <span>R${value}</span>
          {shoppingCart && (
            <span
              className="hover:text-green-400 transition duration-200 cursor-pointer"
              onClick={onAction}
            >
              <Trash />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
