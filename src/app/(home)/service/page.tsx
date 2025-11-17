import ServiceDetail from "../../componentesProntos/detalhes_servico";


export default function Service(){

    return(

        
        <div className="min-h-screen flex flex-col">
                <main className="flex-grow">
                    <ServiceDetail
                        title="Terapia Individual"
                        description="A terapia individual é um espaço de escuta e acolhimento voltado ao autoconhecimento e ao enfrentamento de dificuldades emocionais e comportamentais. É um momento para se conhecer melhor e trabalhar questões internas que impactam o bem-estar."
                        price="R$60,00 por sessão"
                        image="/images/imagem_exemplo.jpg"
                        phone="32991995758"
                    />
                </main>
        </div>
    );
}