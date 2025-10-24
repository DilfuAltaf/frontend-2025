import clsx from "clsx";

interface InputTextProps {
  messageError?: string;
  isError?: boolean;
  value?: any;
  disabled?: boolean;
  w?: string;
}

export default function InputText({
  messageError,
  isError,
  value,
  disabled,
  w,
  ...props
}: InputTextProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        {...props}
        disabled={disabled}
        value={value as string}
        className={clsx("border p-2 rounded-2xl", {
          "border-red-500": isError,
          "border-gray-100 bg-gray-100": disabled,
          "w-48": w == "md",
          "w-80": w == "lg",
          "w-full": w == "xl",
        })}
      />
      {/* {isError ? <span className="text-red-500 italic">Wajib Isi</span> : null} */}
      {isError && (
        <span className="text-red-500 italic">
          {messageError ? messageError : "Wajib Isi"}
        </span>
      )}
    </>
  );
}
