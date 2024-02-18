
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
        className="w-full p-4 text-lg border-gray-200 border"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={500} // Limit input to 500 characters
      />
    </>
  )
};

export default Input;
