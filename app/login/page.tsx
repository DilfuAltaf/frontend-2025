"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Button from "../component/Button";
import Label from "../component/Label";

import { AppContext } from "../component/AppContext";
import InputText from "../component/InputText";

export default function Dashboard() {
  const router = useRouter();
  const { Login } = useContext(AppContext);

  const [username, setUsername] = useState("");
  const [nama, setNama] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorNama, setErrorNama] = useState(false);

  function handleLogin() {
    const hasErrorUsername = username.trim() === "";
    const hasErrorNama = nama.trim() === "";
    setErrorUsername(hasErrorUsername);
    setErrorNama(hasErrorNama);

    if (!hasErrorUsername && !hasErrorNama) {
      Login(username, nama);
      router.push("/admin");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Halaman Login</h1>

      <div className="w-full flex flex-col gap-1">
        <Label title="Username" isRequired color="red" />
        <InputText
          id="username"
          placeholder="Masukkan username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          isError={errorUsername}
          messageError="Username wajib diisi"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <Label title="Nama" isRequired color="red" />
        <InputText
          id="nama"
          placeholder="Masukkan nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          isError={errorNama}
          messageError="Nama wajib diisi"
        />
      </div>

      <Button title="Login" colorSchema="blue" variant="solid" onClick={handleLogin} />
    </main>
  );
}