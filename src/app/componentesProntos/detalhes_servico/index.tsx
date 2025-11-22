'use client';
import Image from "next/image";
import WhatsAppButton from "./botao_whatsapp";
import { Decimal } from "@prisma/client/runtime/library";

type ServiceDetailProps = {
    title: string;
    description: string;
    price: string;
    image: string;
    phone: string;
}

export default function ServiceDetail({title, description, price, image, phone}: ServiceDetailProps){
    return(
        <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-40 bg-[#F7EDE1]">
            {/* Imagem para ilustrar o servico */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                src={image}
                alt={title}
                width={600}
                height={500}
                className="rounded-xl object-cover"
                />
            </div>

            {/*Titulo*/}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-semibold text-[#7b3f2f] mb-6">
                    {title}
                </h1>
                {/*Descrição e preco */}
                <p className="text-[#3cb2b24] leading-relaxed mb-4">
                    {description}
                </p>
                <p className="text-xl font-semibold text-[#e4773f] mb-6">
                    {price}
                </p>
                
                {/*Botão para o whatsapp */}
                <WhatsAppButton
                    phone={phone}
                    message={`Olá! Gostaria de agendar uma ${title.toLowerCase()}.`}
                />
            </div>
        </section>
    )
}