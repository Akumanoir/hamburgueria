import { useMediaQuery } from "@mui/material";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends HTMLAttributes<Element> {
  maxHeight?: boolean;
  children: ReactNode;
}

export function Section({
  children,
  maxHeight = false,
  ...rest
}: SectionProps) {
  const matches = useMediaQuery("(max-width:725px)");

  const height = () => {
    if (matches) {
      return { height: "100%" };
    }
  };

  const isMaxHeight = () => {
    if (maxHeight) {
      return { maxHeight: "calc(100dvh - 10.375rem)" };
    }
  };

  return (
    <section
      className={twMerge("max-w-3xl m-auto flex flex-col", rest.className)}
      style={{ ...isMaxHeight(), ...height() }}
    >
      {children}
    </section>
  );
}
