import ServiceDetail from "../../componentesProntos/detalhes_servico";
import Navbar1 from "../../componentesProntos/navbar/variante1";


export default function Service(){

    return(
        <div className="h-full">
             <ServiceDetail
                title="Terapia Individual"
                description="A terapia individual é um espaço de escuta e acolhimento voltado ao autoconhecimento e ao enfrentamento de dificuldades emocionais e comportamentais. É um momento para se conhecer melhor e trabalhar questões internas que impactam o bem-estar."
                price="R$60,00 por sessão"
                image="/images/imagem_exemplo.jpg"
                phone="32991995758"
            />
        </div>
    );
}