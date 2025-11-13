"use client";

import Button from "../component/Button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { latihanService } from "./sevice";
import { useState, useEffect } from "react";
import { FilterLatihan } from "./interface";
import InputText from "../component/InputText";
import Drawer from "../component/Drawer";

export default function LatihanPage() {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const defaultFilter: FilterLatihan = {
    title: "",
    name: "",
    umur: "",
    alamat: "",
    page: 1,
    limit: 5,
    keyword: "", // tambahkan keyword untuk pencarian global
  };

  const [filter, setFilter] = useState<FilterLatihan>(defaultFilter);
  const [filterSubmit, setFilterSubmit] = useState<FilterLatihan>(defaultFilter);

  const handleChangeFilter = (e: any) => {
    setFilter((v) => ({
      ...v,
      [e.target.name]: e.target.value,
    }));
  };

  const resetButton = () => {
    setFilter(defaultFilter);
    setFilterSubmit(defaultFilter);
    setSearch("");
    setOpen(false);
  };

  const handleSubmit = () => {
    setFilterSubmit({ ...filter, keyword: search });
    setOpen(false);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setFilterSubmit((prev) => ({
        ...prev,
        keyword: search,
        page: 1,
      }));
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setFilterSubmit((prev) => ({ ...prev, page: newPage }));
  };

  const handleLimitChange = (limit: number) => {
    setFilterSubmit((prev) => ({ ...prev, limit, page: 1 }));
  };

  // 🧠 Query React Query
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["latihan-list", filterSubmit],
    queryFn: () => latihanService.list(filterSubmit),
  });

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-3 text-blue-600 font-medium">Memuat data latihan...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] text-center">
        <p className="text-red-600 font-semibold mb-2">{isError}</p>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        📚 Daftar Latihan
      </h1>

      {/* Drawer Filter */}
      <Drawer title="Filter" isOpen={open} onClose={() => setOpen(false)}>
        <div className="space-y-5">
          <InputText
            name="title"
            value={filter.title}
            placeholder="title..."
            onChange={handleChangeFilter}
          />
          <InputText
            name="name"
            value={filter.name}
            placeholder="Name..."
            onChange={handleChangeFilter}
          />
          <InputText
            name="alamat"
            value={filter.alamat}
            placeholder="alamat..."
            onChange={handleChangeFilter}
          />
          <InputText
            name="umur"
            value={filter.umur}
            placeholder="umur..."
            onChange={handleChangeFilter}
          />

          <Button onClick={handleSubmit} title="Submit" colorSchema="green" />
          <Button onClick={resetButton} title="Reset" colorSchema="red" />
        </div>
      </Drawer>

      {/* 🔍 Search Global */}
      <div className="grid grid-cols-12 gap-4 mb-6">
        <div className="col-span-6">
          <InputText
            placeholder="Cari berdasarkan keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-end-12">
          <Button
            onClick={() => setOpen(!open)}
            title="Filter"
            colorSchema="blue"
          />
        </div>
      </div>

      {/* 📄 Table */}
      {data && data.data.length === 0 ? (
        <p className="text-gray-500 italic">Belum ada data latihan.</p>
      ) : (
        <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">#</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Nama</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Alamat</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Umur</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Diupdate</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Detail</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data.map((item: any, i: number) => (
                <tr
                  key={item.id}
                  className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2 font-medium text-gray-800">{item.name}</td>
                  <td className="px-4 py-2 text-gray-700">{item.alamat}</td>
                  <td className="px-4 py-2 text-gray-700">{item.umur}</td>
                  <td className="px-4 py-2 text-gray-500 text-sm">
                    {new Date(item.updated_at).toLocaleString("id-ID")}
                  </td>
                  <td>
                    <Button
                      colorSchema="blue"
                      title="detail"
                      onClick={() => router.push(`latihan/${item.id}/detail`)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}

      {/* 📄 Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-5">
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          value={filterSubmit.limit}
          onChange={(e) => handleLimitChange(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>

        <div className="flex items-center">
          <button
            className="border rounded-full h-8 w-8 bg-blue-400 text-white hover:bg-blue-500 disabled:opacity-50"
            onClick={() => handlePageChange(filterSubmit.page - 1)}
            disabled={filterSubmit.page === 1}
          >
            ←
          </button>

          <p className="text-gray-600 whitespace-nowrap border p-2 rounded-lg mx-5">
            Halaman {filterSubmit.page} dari {data?.meta.lastPage || 1}
          </p>

          <button
            className="border rounded-full h-8 w-8 bg-blue-400 text-white hover:bg-blue-500 disabled:opacity-50"
            onClick={() => handlePageChange(filterSubmit.page + 1)}
            disabled={filterSubmit.page === data?.meta.lastPage}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
