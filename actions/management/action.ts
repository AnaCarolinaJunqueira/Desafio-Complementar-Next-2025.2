"use server";

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const itemsPerPage = 5;

//paginação
export default async function getServices(currentPage: number) {
    const offset = (currentPage - 1) * itemsPerPage;
    const services = await prisma.services.findMany({
        orderBy:{ id:"asc"},
        select: {
            id: true,
            title: true,
            content: true,
            price: true,
            whatsapp: true,
            image: true,
            published: true,
        },
        take: itemsPerPage,
        skip: offset,
    });

    const count = await prisma.services.count();
    const totalPages = Math.ceil(count/itemsPerPage);

    return {services, totalPages};
}

//get por id
export async function getServicesById(id:number) {
    return await prisma.services.findUnique({
        where: {id},
    });
}


//delete serviço
export async function deleteService(id:number) {
    await prisma.services.delete({
        where:{id}
    });

    revalidatePath("/admin");
}

//criar serviço
export async function createService(formData:FormData) {
  const title = formData.get("title")?.toString() || "";
  const content = formData.get("content")?.toString() || "";
  const price = parseFloat(formData.get("price")?.toString() || "0");
  const whatsapp = formData.get("whatsapp")?.toString() || "";
  const image = formData.get("image")?.toString() || "";
  const published = formData.get("published")?.toString() === "on";
    
    await prisma.services.create({
        data: {
            title,
            content,
            price,
            whatsapp,
            image,
            published,
        }
    });

    revalidatePath("/admin");
    redirect("/admin");
}

//uptade serviço
export async function uptadeService(id:number, formData: FormData) {
    const title = formData.get("title")?.toString() || "";
    const content = formData.get("content")?.toString() || "";
    const price = parseFloat(formData.get("price")?.toString() || "0");
    const whatsapp = formData.get("whatsapp")?.toString() || "";
    const image = formData.get("image")?.toString() || "";
    const publishedString = formData.get("published")?.toString() || "false";
    const published = publishedString === "true";

    await prisma.services.update({
        where: {id},
        data:{
            title,
            content,
            price,
            whatsapp,
            image,
            published,
        }
    });

    revalidatePath("/admin")
    redirect("/admin")
}

//view serviço
export async function viewService(id:number) {
    const service = await prisma.services.findUnique({
        where: {id},
    });

    if(!service)
        return null;

    return{
        ...service,
        price: service.price.toString(),
    };
}