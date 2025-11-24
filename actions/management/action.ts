"use server";

import prisma from "@/src/lib/db";
import { Service } from "@/src/app/types/admin/serviceTable";

{/*Paginação e barra de pesquisa*/}

export async function getServices(page = 1, search = "") {
  const itemsPerPage = 6;

  const where: any = {
    published: true,
  };

  if (search && search.trim() !== "") {
    where.title = {
      contains: search,
      mode: "insensitive" as const,
    };
  }

  const services = await prisma.services.findMany({
    where,
    skip: (page - 1) * itemsPerPage,
    take: itemsPerPage,
  });

  const total = await prisma.services.count({ where });

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

{/*Modal de Delete */}
export async function deleteService(id:number) {
  return await prisma.services.delete({
    where: {id}
  });
}