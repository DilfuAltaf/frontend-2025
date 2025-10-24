"use client";
import { ReactNode, useContext } from "react";
import { AppContext } from "./AppContext";
import clsx from "clsx";

interface ThemeProps {
  title: string;
  subJudul?: string;
  children: ReactNode;
}

const AppTheme: React.FC<ThemeProps> = ({ title, children, subJudul }) => {
  const appContext = useContext(AppContext);
  const { theme } = appContext;
  return (
    <>
      <header
        className={clsx(
          ` w-full  h-[100px] flex items-end justify-between uppercase font-semibold  px-5 py-8`,
          {
            "bg-red-500 text-white": theme === "light",
            "bg-blue-400 text-white ": theme === "dark",
          }
        )}
      >
        <h1 className="text-3xl"> {title}</h1>
        <h1 className="text-md">{subJudul}</h1>

      </header>
      <div
        className={clsx(` border  p-5 h-screen w-full`, {
          "bg-gray-200": theme === "light",
          "bg-gray-800 text-white ": theme === "dark",
        })}
      >
        {children}
      </div>
    </>
  );
};

export default AppTheme;