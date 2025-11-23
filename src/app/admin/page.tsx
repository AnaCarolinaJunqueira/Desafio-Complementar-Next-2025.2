import getServices from "@/actions/management/action";
import ServicesTable from "../componentesProntos/services_table";
import Pagination from "../componentesProntos/services_table/pagination";
import { Decimal } from "@prisma/client/runtime/library";

type AdminProps = {
  searchParams: {
    page?: string;
  };
};

// 💡 Tipagem baseada no seu action (getServices)
type ServiceFromDB = {
    id: number;
    title: string;
    content: string;
    price: Decimal;
    whatsapp: string;
    image: string;
    published: boolean;
};
type GetServicesReturn = {
    services: ServiceFromDB[];
    totalPages: number;
};

export default async function Admin({ searchParams }: AdminProps) {
  const currentPage = Number(searchParams.page) || 1;
    
  // 2. Erros de propriedades (services e totalPages) corrigidos pela tipagem
  const { services, totalPages } = (await getServices(currentPage)) as GetServicesReturn; 

  // 3. Erro de 'any' resolvido (se persistir, use (service: ServiceFromDB) => ...)
  const formattedServices = services.map(service => ({
    id: String(service.id),
    name: service.title,
    price: `R$ ${service.price.toFixed(2).replace('.', ',')}`,
    description: service.content,
    image: service.image,
    whatsapp: service.whatsapp,
  }))

  return (
    <main className="px-6 py-12 min-h-screen">
      <h1 className="flex text-3xl font-semibold mb-8 text-[#B54A22] py-8 justify-center">
        Gerenciamento de Serviços
      </h1>

      <ServicesTable
        services={formattedServices}
      />

      <Pagination totalPages={totalPages} />
    </main>
  );
}