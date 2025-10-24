"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname(); // ambil path aktif

    const navItems = [
        { name: "Dashboard", href: "/latihan/dashboard" },
        { name: "Data", href: "/latihan/data" },
        { name: "Users", href: "/latihan/users" },
        { name: "Setting", href: "/latihan/setting" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-red-500 text-white p-8 flex justify-between items-end text-xl font-semibold">
                <Link href="/latihan/dashboard">
                    <h1 className="text-3xl">Dilfu's Project</h1>
                </Link>
                <h1 className="texts-md">Luvie</h1>
            </header>

            {/* Bagian bawah header */}
            <div className="flex flex-1">
                {/* Navigation di kiri */}
                <nav className="w-64 bg-gray-100 p-4 border-r border-gray-300">
                    <ul className="mb-2 text-xl font-semibold"><li>Navigation</li></ul>
                    <hr />
                    <ul className="space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`block p-2 rounded transition-colors duration-200 ${isActive
                                                ? "bg-red-500 text-white"
                                                : "hover:bg-gray-200 text-gray-800"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Konten utama di kanan */}
                <main className="flex-1 p-6 bg-white">
                    <h1 className="text-3xl font-bold mb-4">Selamat Datang Luvie</h1>
                    {children}
                </main>
            </div>
        </div>
    );
}
