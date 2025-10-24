"use client";

import React from "react";
import Link from "next/link";

export default function UsersPage() {
  const users = [
    { id: 1, nama: "Luvie", role: "Admin" },
    { id: 2, nama: "Dika", role: "User" },
    { id: 3, nama: "Nana", role: "Moderator" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Daftar Users</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-3 px-4 border-b">Nama</th>
              <th className="py-3 px-4 border-b">Role</th>
              <th className="py-3 px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{user.nama}</td>
                <td className="py-3 px-4 border-b">{user.role}</td>
                <td className="py-3 px-4 border-b">
                  <Link
                    href={`users/${user.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Lihat Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
