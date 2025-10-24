"use client";

import { useEffect, useState } from "react";
import InputText from "../component/InputText";
import Link from "next/link";

export default function Page() {
    const [count, setCount] = useState(0);
    let [text, setText] = useState<string>("")

    useEffect(() => {
        //kode yang akan dijalankan ketika useEffect jalan
        const interval = setInterval(() => {
            console.log("Berjalan")
            setCount((c) => c + 1);
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [text]);

    return (
        <>
            <div className="w-full h-screen flex flex-col">
                <h2 className="text-4xl">{text}</h2>
                <h4 className="text-4xl">{count}</h4>
                <InputText value={text} w="lg" onChange={(e) => {
                    setText(e.target.value)
                }} />
                <Link href={"/belajar-state"}>Pindah</Link>
            </div>
        </>
    );
}