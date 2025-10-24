"use client";

import { useState } from "react";
import Button from "../component/Button";
import InputText from "../component/InputText";
import RadioButton from "../component/Radio";

interface NilaiUjian {
  mata_pelajaran: string;
  nilai: number;
  isRemedial: boolean;
}

export default function BelejarStateArray() {
  let [hasil, setHasil] = useState<NilaiUjian[]>([
    { mata_pelajaran: "Matematika", nilai: 100, isRemedial: false },
    { mata_pelajaran: "Fisika", nilai: 80, isRemedial: false },
    { mata_pelajaran: "Kimia", nilai: 90, isRemedial: false },
    { mata_pelajaran: "Biologi", nilai: 50, isRemedial: true },
  ]);

  const [mapel, setMapel] = useState("");
  const [nilai, setNilai] = useState<number | "">("");
  const [isRemedial, setIsRemedial] = useState(false);

  return (
    <div className="py-10 px-20">
      <h1>Belajar State Array</h1>

      <div className="py-10">
        <table>
          <thead>
            <tr>
              <th className="p-5 border">No</th>
              <th className="p-5 border">Mata Pelajaran</th>
              <th className="p-5 border">Nilai</th>
              <th className="p-5 border">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {hasil?.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="p-5 border">{index + 1}</td>
                  <td className="p-5 border">{item.mata_pelajaran}</td>
                  <td className="p-5 border">{item.nilai}</td>
                  <td className="p-5 border">
                    {item.isRemedial ? "Remedial" : "Lulus"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 w-80">
        <InputText
          placeholder="Mata Pelajaran"
          value={mapel}
          onChange={(e) => setMapel(e.target.value)}
          w="lg"
        />
        <InputText
          placeholder="Nilai"
          type="number"
          value={nilai}
          onChange={(e) => setNilai(Number(e.target.value))}
          w="lg"
        />

        <div className="flex gap-5">
          <RadioButton
            title="Tidak Remedial"
            value="false"
            checked={isRemedial === false}
            onChange={() => setIsRemedial(false)}
          />
          <RadioButton
            title="Remedial"
            value="true"
            checked={isRemedial === true}
            onChange={() => setIsRemedial(true)}
          />
        </div>

        <Button
          title="Tambah"
          colorSchema="blue"
          onClick={() => {
            if (!mapel || nilai === "") return;
            setHasil((prev) => [
              ...prev,
              {
                mata_pelajaran: mapel,
                nilai: Number(nilai),
                isRemedial: isRemedial,
              },
            ]);
            setMapel("");
            setNilai("");
            setIsRemedial(false);
          }}
        />
      </div>
    </div>
  );
}
