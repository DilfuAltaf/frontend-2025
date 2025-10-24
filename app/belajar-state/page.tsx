"use client";

import { useState } from "react";
import Button from "../component/Button";
import InputText from "../component/InputText";
import clsx from "clsx";

export default function BelajarState() {
    let [count, setCount] = useState<any>(0);
    let [text, setText] = useState<string>("");
    let [isOn, setIsOn] = useState<boolean>(false);
    return (
        <>
            <h1 className="mb-5">Belajar State</h1>
            <div className="flex flex-col gap-4 px-8">
                <div className="border h-36 flex items-center text-center">
                    {text}
                </div>
            </div>
            <div className="flex flex-col gap-4 my-4 items-center">
                <div className="flex gap-4">
                    <div className="border w-28 h-28 rounded-full flex justify-center items-center">
                        {count}
                    </div>
                    <div className={clsx('border w-28 h-28 rounded-full flex justify-center items-center', {
                        "bg-red-500": isOn,
                        "bg-blue-500": !isOn
                    })}></div>
                </div>
                <div className="flex gap-4">
                    <Button
                        onClick={() => {
                            setCount(count + 1);
                            setIsOn(true)
                        }}
                        title="Tambah"
                        colorSchema="red"
                        width="md"
                    />
                    <Button
                        onClick={() => {
                            setCount(count - 1);
                            setIsOn(false)
                        }}
                        title="Kurang"
                        colorSchema="blue"
                        width="md"
                    />
                    <Button
                        onClick={() => {
                            setIsOn(!isOn)
                        }}
                        title="Nyala/Mati"
                        colorSchema="green"
                        width="md"
                    />
                </div>
            </div>
        </>
    );
}
