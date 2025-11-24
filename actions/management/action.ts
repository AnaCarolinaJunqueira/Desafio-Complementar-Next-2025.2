"use server";

import prisma from "@/src/lib/db";
import { Service } from "@/src/app/types/admin/serviceTable";

{/*Paginação */}
export default async function getServices(page: number = 1): Promise<{ services: Service[]; totalPages: number }> {
  const itemsPerPage = 5;
  const skip = (page - 1) * itemsPerPage;

  const services = await prisma.services.findMany({
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
      published: true,
    },
  });

  const total = await prisma.services.count({ where: { published: true } });

  const totalPages = Math.ceil(total / itemsPerPage);

  return { services, totalPages };
}

{/*Modal de adicionar serviço */}
export async function addService(data: {
  title: string;
  content: string;
  price: number;
  whatsapp: string;
  image: string;
}) {
  const service = await prisma.services.create({
    data:{
      title: data.title,
      content: data.content,
      price: data.price,
      whatsapp: data.whatsapp,
      image: data.image,
      published: true,
    },
  });

  return service;
}

{/*Editar Serviço */}
export async function editService(id:number, data: {
  title: string;
  content: string;
  price: number;
  whatsapp: string;
  image: string;
}) {
  const uptade = await prisma.services.update({
    where: {id},
    data:{
      title: data.title,
      content: data.content,
      price: data.price,
      whatsapp: data.whatsapp,
      image: data.image,
    },
  });

  return uptade;
}
