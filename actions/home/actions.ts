"use server"

import prisma from "@/src/lib/db"

export default async function getServices() {
    const services = await prisma.services.findMany({
        where: {published: true},
        select:{
            id: true,
            title: true,
            content: true,
            image: true,
        },
        orderBy: {id: "asc"},
    });

    return services;
}

