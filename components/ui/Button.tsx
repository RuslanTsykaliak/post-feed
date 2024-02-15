'use client'
import clsx from "clsx"

// import { TButton } from "@/types/types";

import { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({
  type,
  text,
  onClick,
  actionButton,
}: buttonProps
  // TButton
) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={clsx(
          actionButton && `bg-green-700 rounded-full p-2 text-white`,
          `bg-green-700 px-2 text-white`
        )}
      >
        {text}
      </button>
    </>
  )
};

export default Button;
