import { ReactNode } from "react";

export type TInput = {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

export type TForm = {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
}

export type TButton = {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}
