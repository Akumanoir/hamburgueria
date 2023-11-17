import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react"

interface ConfirmButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onAction?: () => void;
}

export function ConfirmButton({ text, onAction, ...rest }: ConfirmButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        "w-full border p-5 hover:bg-green-400 hover:text-white transition duration-200", rest.className
      )}
      onClick={onAction}
    >
      {text}
    </button>
  );
}
