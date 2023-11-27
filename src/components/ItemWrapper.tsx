import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ItemWrapperProps extends HTMLAttributes<Element> {
  children: ReactNode;
}

export function ItemWrapper({ children, ...rest }: ItemWrapperProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 flex-grow overflow-y-auto",
        rest.className,
      )}
    >
      {children}
    </div>
  );
}
