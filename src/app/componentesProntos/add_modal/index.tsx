"use client";

import { X } from "lucide-react";
import { FormEvent } from "react";

type AddModalProps = {
    open: boolean;
    onClose: () => void;
    onSubmit: (service: any) => void;
};

export default function AddModal({ open, onClose, onSubmit }: AddModalProps) {
    if (!open) return null;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const service = Object.fromEntries(data.entries());
        onSubmit(service);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative">

                {/*Fecha Modal*/}
                <button onClick={onClose} className="absolute right-3 top-3">
                    <X size={22} />
                </button>

                <h2 className="text-xl font-semibold mb-4 text-center">Adicionar Serviço</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input name="name" placeholder="Nome" className="border p-2 rounded w-full" required />
                    <input name="price" placeholder="Preço" className="border p-2 rounded w-full" required />
                    <input name="image" placeholder="Imagem (URL)" className="border p-2 rounded w-full" required />
                    <input name="whatsapp" placeholder="WhatsApp" className="border p-2 rounded w-full" required />
                    <textarea name="description" placeholder="Descrição" className="border p-2 rounded w-full" required />
                    
                    {/*Adiciona servico*/}
                    <button
                        type="submit"
                        className="bg-[#D16339] text-white py-2 rounded hover:bg-[#B54A22]"
                    >
                        Adicionar
                    </button>
                </form>
            </div>
        </div>
    );
}
