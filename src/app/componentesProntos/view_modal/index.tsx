"use client";

import { Service } from "../../types/admin/serviceTable";
import { X } from "lucide-react";

type ViewModalProps = {
    open: boolean;
    onClose: () => void;
    service: Service | null;
};

export default function ViewModal({ open, onClose, service }: ViewModalProps) {
    if (!open || !service) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative">

                {/*Fecha Modal*/}
                <button onClick={onClose} className="absolute right-3 top-3">
                    <X size={22} />
                </button>

                <h2 className="text-xl font-semibold mb-4 text-center">Detalhes do Serviço</h2>

                <div className="flex flex-col gap-3 text-center">
                    <p><strong>Nome:</strong> {service.title}</p>
                    <p><strong>Preço:</strong> {service.price}</p>
                    <p><strong>WhatsApp:</strong> {service.whatsapp}</p>
                    <p><strong>Descrição:</strong> {service.content}</p>
                </div>

                <img src={service.image} className="w-full rounded mt-4" />
            </div>
        </div>
    );
}
