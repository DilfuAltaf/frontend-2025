"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/app/component/Button";
import { usePathname } from "next/navigation";

interface Guru {
    params: {
        nama: string;
    }
}

export default function Hasil({ params }: Guru) {
    const router = useRouter();
    const path = usePathname();
    console.log(path)
    let [count, setCount] = useState(0);

    console.log("path:", path);

    useEffect(() => {
        if (count >= 5) {
            router.push(`tes`)
        }
    }, [count]);

    return (
        <div>
            <h1>Hasil</h1>
            <h1>Id: {params.nama}</h1> 
            <Link href={`tes`}>Pindah</Link>
            <Link href={`${path}`}>Pindah2</Link>
            <Button title="Pindah" colorSchema="blue" onClick={() => {
                router.push(`tes`)
            }}/>
            <Button title="Pindah Setelah 5 Klik" colorSchema="blue" onClick={() => {
                setCount(count + 1);
            }}/>
        </div>
    );
}