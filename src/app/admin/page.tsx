import ServicesTable from "../componentesProntos/services_table";

export default function Admin(){
    return(
        <main className="px-6 py-12 min-h-screen">
            <h1 className=" flex text-3xl font-semibold mb-8 text-[#B54A22] py-8 justify-center">Gerenciamento de Serviços</h1>

            <ServicesTable services={[{id: "1",
        name: "Terapia Individual",
        price: "R$ 60,00",
        description: "Sessão de autoconhecimento",
        image: "/images/imagem_exemplo.jpg",
        whatsapp: "32991995758"
}]}/>
        </main>
    )
}