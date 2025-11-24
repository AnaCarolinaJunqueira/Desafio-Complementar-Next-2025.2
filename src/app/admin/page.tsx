"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {getServices} from "@/actions/management/action";
import ServicesTable from "../componentesProntos/services_table";
import Pagination from "../componentesProntos/services_table/pagination";
import { Service } from "../types/admin/serviceTable";

export default function Admin() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  const [services, setServices] = useState<Service[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function load() {
      const { services:svc, totalPages:tp } = await getServices(page, search);
      setServices(svc);
      setTotalPages(tp);
    }
    load();
  }, [page, search]);

  return (
    <main className="px-6 py-12 min-h-screen">
      <h1 className="flex text-3xl font-semibold mb-8 text-[#B54A22] py-8 justify-center">
        Gerenciamento de Serviços
      </h1>

      <ServicesTable services={services} />
      <Pagination totalPages={totalPages} currentPage={page} />
    </main>
  );
}
