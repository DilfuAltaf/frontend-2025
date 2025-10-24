"use client";

import { useState } from "react";
import Card from "../component/card";
import Label from "../component/Label";
import InputText from "../component/InputText";
import RadioButton from "../component/Radio";

interface profile {
  nama: string;
  email: string;
  password: string;
  umur: number | string;
  isLulus: boolean;
}

export default function BelajarStateObject() {
  const [profile, setProfile] = useState<profile>({
    nama: "Dilfu Altaf Athaya Rifi",
    email: "dilfualtaf07@gmail.com",
    password: "asdjajdha",
    umur: 17,
    isLulus: false,
  });

  return (
    <div className="py-5 px-10">
      <h1 className="font-bold text-2xl py-5">Belajar State Object</h1>
      <div className="flex flex-col gap-3 py-3">
        <Card value={profile.nama} label="Nama" />
        <Card value={profile.email} label="Email" />
        <Card value={profile.password} label="Password" />
        <Card value={profile.umur} label="Umur" />
        <Card
          value={profile.isLulus ? "Lulus" : "Belum lulus"}
          label="Keterangan"
        />
      </div>
      <div className="flex flex-col gap-3 py-3">
        <Label htmlFor="nama" title="Nama" color="black" />
        <InputText
          disabled
          value={profile.nama}
          w="lg"
          onChange={(e) => {
            setProfile((prevProfile) => {
              return {
                ...prevProfile,
                nama: e.target.value,
              };
            });
          }}
        />
        <Label htmlFor="email" title="Email" color="black" />
        <InputText
          disabled
          value={profile.email}
          w="lg"
          onChange={(e) => {
            setProfile((prevProfile) => {
              return {
                ...prevProfile,
                email: e.target.value,
              };
            });
          }}
        />
        <Label htmlFor="password" title="Password" color="black" />
        <InputText
          disabled
          value={profile.password}
          w="lg"
          onChange={(e) => {
            setProfile((prevProfile) => {
              return {
                ...prevProfile,
                password: e.target.value,
              };
            });
          }}
        />
        <Label htmlFor="umur" title="Umur" color="black" />
        <InputText
          disabled={false}
          value={profile.umur}
          w="lg"
          onChange={(e) => {
            setProfile((prevProfile) => {
              return {
                ...prevProfile,
                umur: e.target.value,
              };
            });
          }}
        />
        <Label htmlFor="keterangan" title="Keterangan" color="black" />
        <div className="flex gap-4">
          <RadioButton
          title="Lulus"
          value="true"
          checked={profile.isLulus}
          onChange={(e) => {
            setProfile((prevProfile) => {
              return {
                ...prevProfile,
                isLulus: true,
              };
            });
          }}
        />
        <RadioButton
          title="Belum Lulus"
          value="false"
          checked={!profile.isLulus}
          onChange={(e) => {
            setProfile((prevProfile) => {
              return {
                ...prevProfile,
                isLulus: false,
              };
            });
          }}
        />
        </div>
      </div>
    </div>
  );
}
