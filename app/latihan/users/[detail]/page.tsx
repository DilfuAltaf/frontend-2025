"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function DetailPage() {
  const { detail } = useParams(); // ambil nilai dari [detail] folder

  // data dummy untuk simulasi
  const users = [
    { id: "1", nama: "Luvie", email: "luvie@example.com", role: "Admin" },
    { id: "2", nama: "Siti Rahma", email: "siti@example.com", role: "User" },
    { id: "3", nama: "Dika Pratama", email: "dika@example.com", role: "Moderator" },
  ];

  const user = users.find((u) => u.id === detail);

  if (!user) {
    return (
      <div>
        <Link href="/latihan/users" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Kembali
        </Link>
        <p className="text-gray-500">User dengan ID {detail} tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Tombol kembali */}
      <Link href="/latihan/users" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Kembali
      </Link>

      {/* Judul */}
      <h1 className="text-2xl font-bold mb-6">Detail User #{user.id}</h1>

      {/* Card detail user */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        <p className="mb-2">
          <span className="font-semibold">Nama:</span> {user.nama}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Role:</span> {user.role}
        </p>
      </div>
    </div>
  );
}
