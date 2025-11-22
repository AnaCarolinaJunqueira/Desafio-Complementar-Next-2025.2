import ServiceDetail from "../../../componentesProntos/detalhes_servico";
import { getServicesId } from "@/actions/individual/action";

export default async function Service(props: {
    params: Promise<{ id: string }>
}) {
    const { id } = await props.params;

    const numericId = Number(id);

    if (isNaN(numericId)) {
        return <p>ID inválido</p>;
    }

    const service = await getServicesId(numericId);

    if (!service) {
        return <p>Serviço não encontrado</p>;
    }

    return (
        <div className="h-full">
            <ServiceDetail
                title={service.title}
                description={service.content}
                price={`R$ ${service.price}`}
                image={service.image}
                phone={service.whatsapp}
            />
        </div>
    );
}
