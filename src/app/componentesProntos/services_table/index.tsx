"use client"

import ActionButtons from "./action_buttons";
import Buttons from "./action_buttons";

type Service = {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
    whatsapp: string;
};

type TableProps = {
    services: Service[];
};

export default function ServicesTable({services}:TableProps){
    return(
        <div className="w-full overflow-x-auto">
            {/*Tabela de serviços */}
            <table className="w-full border-collapse">
                {/*Cabecalho da tabela */}
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
                {/*Corpo da tabela */}
                <tbody>
                    {services.map((service, i) => (
                        <tr key={i} className="border-b text-center">
                            <td className="p-3 min-w-[150px] max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap truncate">{service.name}</td>
                            <td className="p-3 min-w-[100px]">{service.price}</td>
                            <td className="p-3 min-w-[250px] max-w-[280px] overflow-hidden text-ellipsis whitespace-nowrap truncate">{service.description}</td>
                            <td className="p-3 min-w-[120px] flex justify-center">
                                <img src={service.image} className="h-12 rounded"/>
                            </td>
                            <td className="p-3 min-w-[180px]">
                                <a href={`https://wa.me/${service.whatsapp}`} className="text-blue-600 underline" target="_blank"> Agendar</a>
                            </td>
                            <td className="p-3 min-w-[170px]">
                                <ActionButtons id={service.id} onView={() => {}} onEdit={() => {}} onDelete={()=>{}}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}