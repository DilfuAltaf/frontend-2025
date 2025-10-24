"use client"
import Button from "@/app/component/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Guru {
    params: {
        nama: string;
    }
}

export default function Tes({ params }: Guru) {
    const router = useRouter();
    let[count,setCount] = useState(0);

    useEffect(() => {
        if (count >= 5) {
            router.push('hasil')
        }
    }, [count]);

    return (
        <div>
            <h1>Tes</h1>
            <h1>Id: {params.nama}</h1> 
            <Link href={'hasil'}>Pindah</Link>

            <Button title="Pindah" colorSchema="blue" onClick={() => {
                router.push('hasil')
            }}/>
            <Button title="Pindah Setelah 5 Klik" colorSchema="blue" onClick={() => {
                setCount(count + 1);
            }}/>
        </div>
    );
}