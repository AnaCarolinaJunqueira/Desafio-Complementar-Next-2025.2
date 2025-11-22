"use server";

import prisma from "@/src/lib/db";

export async function getServicesId(id: number) {
    const service = await prisma.services.findUnique({
        where: {id},
    })

    return service;
}