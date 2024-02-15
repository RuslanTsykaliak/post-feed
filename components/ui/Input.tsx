
import { TInput } from "@/types/types";

const Input = ({
  name,
  type,
  placeholder,
  value,
}: TInput) => {
  return (
    <>
      <input
        className="w-full p-2 border-gray-200 border"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
};

export default Input;
