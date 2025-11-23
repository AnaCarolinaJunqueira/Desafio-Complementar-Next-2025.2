"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Service } from "../../types/admin/serviceTable";

import ActionButtons from "./action_buttons";
import SearchBar from "./searchbar";
import AddModal from "../add_modal";
import ViewModal from "../view_modal";
import EditModal from "../edit_modal";
import DeleteModal from "../delete_modal";

type TableProps = {
  services: Service[];
};

export default function ServicesTable({ services }: TableProps) {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const [selected, setSelected] = useState<Service | null>(null);

  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() ?? "";
  const filtered = services.filter((service) => service.name.toLowerCase().includes(search));

  return (
    <div className="w-full overflow-x-auto">
      <SearchBar />
      <button onClick={() => setModalAdd(true)} className="bg-[#D16339] text-white px-4 py-2 rounded mb-4">
        + Adicionar Serviço
      </button>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#D16339] text-white text-center">
            <th className="p-3 whitespace-nowrap">Nome</th>
            <th className="p-3 whitespace-nowrap">Preço</th>
            <th className="p-3 whitespace-nowrap">Descrição</th>
            <th className="p-3 whitespace-nowrap">Imagem</th>
            <th className="p-3 whitespace-nowrap">Agendamento</th>
            <th className="p-3 whitespace-nowrap">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((service) => (
            <tr key={service.id} className="border-b text-center">
              <td className="p-3 min-w-[150px] max-w-[180px] overflow-hidden truncate">{service.name}</td>
              <td className="p-3 min-w-[100px]">{service.price}</td>
              <td className="p-3 min-w-[250px] max-w-[280px] overflow-hidden truncate">{service.description}</td>
              <td className="p-3 min-w-[120px] flex justify-center">
                <img src={service.image} className="h-12 rounded" />
              </td>
              <td className="p-3 min-w-[180px]">
                <a href={`https://wa.me/${service.whatsapp}`} className="text-blue-600 underline" target="_blank">
                  Agendar
                </a>
              </td>
              <td className="p-3 min-w-[170px]">
                <ActionButtons
                  onView={() => {
                    setSelected(service);
                    setModalView(true);
                  }}
                  onEdit={() => {
                    setSelected(service);
                    setModalEdit(true);
                  }}
                  onDelete={() => {
                    setSelected(service);
                    setModalDelete(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modais */}
      <AddModal open={modalAdd} onClose={() => setModalAdd(false)} onSubmit={(s) => console.log("add", s)} />
      <ViewModal open={modalView} onClose={() => setModalView(false)} service={selected} />
      <EditModal open={modalEdit} onClose={() => setModalEdit(false)} service={selected} onSave={(id, data) => console.log("edit", id, data)} />
      <DeleteModal open={modalDelete} onClose={() => setModalDelete(false)} service={selected} onConfirm={(id) => console.log("delete", id)} />
    </div>
  );
}
