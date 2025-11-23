"use client";

import { X } from "lucide-react";
import { FormEvent } from "react";
import { Service } from "../../types/admin/serviceTable";

type EditModalProps = {
    open: boolean;
    onClose: () => void;
    service: Service | null;
    onSave: (id: number, updated: any) => void;
};

export default function EditModal({ open, onClose, service, onSave }: EditModalProps) {
    if (!open || !service) return null;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget); 
        const updated = Object.fromEntries(data.entries()); 
        onSave(service.id, updated);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
                {/*Fecha Modal*/}
                <button onClick={onClose} className="absolute right-3 top-3">
                    <X size={22} />
                </button>

                <h2 className="text-xl font-semibold mb-4 text-center">Editar Serviço</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input name="name" defaultValue={service.name} className="border p-2 rounded w-full" />
                    <input name="price" defaultValue={service.price} className="border p-2 rounded w-full" />
                    <input name="image" defaultValue={service.image} className="border p-2 rounded w-full" />
                    <input name="whatsapp" defaultValue={service.whatsapp} className="border p-2 rounded w-full" />
                    <textarea name="description" defaultValue={service.description} className="border p-2 rounded w-full" />

                    {/*Edita servico*/}
                    <button className="bg-[#D16339] text-white py-2 rounded">Salvar</button>
                </form>
            </div>
        </div>
    );
}
