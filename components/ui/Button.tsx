'use client'
import clsx from "clsx"

import { TButton } from "@/types/types";


const Button = ({
  type,
  text,
  onClick,
  actionButton,
}: TButton) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={clsx(
          actionButton && `bg-yellow-400 rounded-full p-2 text-white`,
          `bg-yellow-400 px-2 text-white`
        )}
      >
        {text}
      </button>
    </>
  )
};

export default Button;
