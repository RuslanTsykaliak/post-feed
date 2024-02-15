"use client";

import { TForm } from "@/types/types";
import { useRef } from "react";


const Form = ({
  children,
  action,
  className,
  onSubmit,
}: TForm) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
