"use client";

import { useEffect, useState } from "react";
import { Service } from "../../types/admin/serviceTable";

import ActionButtons from "./action_buttons";
import SearchBar from "./searchbar";
import AddModal from "../add_modal";
import ViewModal from "../view_modal";
import EditModal from "../edit_modal";
import DeleteModal from "../delete_modal";
import { deleteService, editService } from "@/actions/management/action";

type TableProps = {
  services: Service[];
  onAdded?: (service: any) => void;
};

export default function ServicesTable({ services, onAdded }: TableProps) {
  const [serviceList, setServiceList] = useState(services);
  
  useEffect(() => {
    setServiceList(services);
  }, [services]);

  const [modalAdd, setModalAdd] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <div className="w-full overflow-x-auto">
      {/* barra de pesquisa */}
      <SearchBar />

      {/* botão adicionar */}
      <button
        onClick={() => setModalAdd(true)}
        className="bg-[#D16339] text-white px-4 py-2 rounded mb-4"
      >
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
          {/* Caso não tenha resultados */}
          {serviceList.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="text-center p-6 text-gray-500"
              >
                Nenhum serviço encontrado.
              </td>
            </tr>
          ) : (
            serviceList.map((service) => (
              <tr key={service.id} className="border-b text-center">
                <td className="p-3 min-w-[150px] max-w-[180px] overflow-hidden truncate">
                  {service.title}
                </td>

                <td className="p-3 min-w-[100px]">{service.price}</td>

                <td className="p-3 min-w-[250px] max-w-[280px] overflow-hidden truncate">
                  {service.content}
                </td>

                <td className="p-3 min-w-[120px] flex justify-center">
                  <img src={service.image} className="h-12 rounded" />
                </td>

                <td className="p-3 min-w-[180px]">
                  <a
                    href={`https://wa.me/${service.whatsapp}`}
                    className="text-blue-600 underline"
                    target="_blank"
                  >
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
            ))
          )}
        </tbody>
      </table>

      {/* Modais */}
      <AddModal
        open={modalAdd}
        onClose={() => setModalAdd(false)}
        onAdded={(newService) => {
          setServiceList([...serviceList, newService]);
          if(onAdded) onAdded(newService);
        }}
      />

      <ViewModal open={modalView} onClose={() => setModalView(false)} service={selected} />

      <EditModal
        open={modalEdit}
        onClose={() => setModalEdit(false)}
        service={selected}
        onSave={async (id, updated) => {
          const result = await editService(id, updated);
          setServiceList(serviceList.map(s => (s.id === id ? result : s)));
        }}
      />

      <DeleteModal
        open={modalDelete}
        onClose={() => setModalDelete(false)}
        service={selected}
        onConfirm={async (id) => {
          await deleteService(id);
          setServiceList(serviceList.filter(s => s.id !== id));
        }}
      />
    </div>
  );
}
