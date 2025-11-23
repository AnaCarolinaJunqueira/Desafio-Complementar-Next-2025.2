"use server";

import prisma from "@/src/lib/db";
import { Service } from "@/src/app/types/admin/serviceTable";

export default async function getServices(page: number = 1): Promise<{ services: Service[]; totalPages: number }> {
  const itemsPerPage = 5;
  const skip = (page - 1) * itemsPerPage;

  const servicesRaw = await prisma.services.findMany({
    skip,
    take: itemsPerPage,
    where: { published: true },
    orderBy: { id: "asc" },
    select: {
      id: true,
      title: true,
      content: true,
      price: true,
      whatsapp: true,
      image: true,
    },
  });

  const total = await prisma.services.count({ where: { published: true } });

  const services: Service[] = servicesRaw.map((s) => ({
    id: s.id,
    name: s.title,
    description: s.content,
    price: `R$ ${s.price.toFixed(2)}`,
    image: s.image,
    whatsapp: s.whatsapp,
  }));

  const totalPages = Math.ceil(total / itemsPerPage);

  return { services, totalPages };
}
