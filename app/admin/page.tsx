"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../component/AppContext";
import { useRouter } from "next/navigation";
import Button from "../component/Button";

export default function AdminPage() {
  const { IsAuth, LogOut } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (IsAuth===false) {
      router.push("/dasboard");
    }
  }, [IsAuth, router]);
const { user } = useContext(AppContext);

  return (
    <main className="flex flex-col items-start justify-center  gap-4 p-6">
      <h1 className="text-3xl font-bold">Selamat datang,{user?.nama}! <span className="font-normal italic text-sm">@{user?.username}</span></h1>
      <h3 className="text-lg">Home Page</h3>

      <Button
        title="Logout"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          LogOut();
          router.push("/login");
        }}
      />
    </main>
  );
}