import clsx from "clsx";
type Color = "red" | "blue" | "green" | "black";
type Text = "xl" | "md" | "lg";
interface LabelProps {
  title: string;
  color?: Color;
  text?: Text;
  isRequired?: boolean;
}

export default function Label({
  title,
  isRequired,
  text="md",
  color = "blue",
  ...props
}: LabelProps & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={clsx("", {
        "text-black": color === "black",
        "text-red-500": color === "red",
        "text-blue-500": color === "blue",
        "text-green-500": color === "green",
        "text-lg" : text === "lg",
         "text-3xl" : text === "xl",
         "text-md" : text === "md",
      })}
      {...props}
    >
      {title} {isRequired ? "*" : <></>}{" "}
    </label>
  );
}