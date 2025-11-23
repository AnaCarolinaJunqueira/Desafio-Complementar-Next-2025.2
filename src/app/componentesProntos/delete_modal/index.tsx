import { X } from "lucide-react";
import { Service } from "../../types/admin/serviceTable";

type DeleteModalProps = {
    open: boolean;
    onClose: () => void;
    service: Service | null;
    onConfirm: (id: number) => void;
};

export default function DeleteModal({ open, onClose, service, onConfirm }: DeleteModalProps) {
    if (!open || !service) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto relative">

                <h2 className="text-xl font-semibold mb-4 text-center text-red-600">Excluir Serviço</h2>

                <p className="text-center">Tem certeza de que deseja excluir:</p>
                <p className="font-semibold mt-2 text-center">{service.name}</p>

                <div className="flex justify-center gap-4 mt-6">
                    {/*Fecha Modal*/}
                    <button onClick={onClose} className="px-4 py-2 border rounded">
                        Cancelar
                    </button>
                    {/*Exclui servico*/}
                    <button
                        onClick={() => onConfirm(service.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded"
                    >
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    );
}
