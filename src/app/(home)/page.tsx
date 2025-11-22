import HeroSectionOne from "../componentesProntos/herosection/variante1";
import SobreNosTwo from "../componentesProntos/sobrenos/variante2";
import ServicesThree from "../componentesProntos/servicos/variante3";
import FeedbackOne from "../componentesProntos/feedback/variante1";
import FeedbackTwo from "../componentesProntos/feedback/variante2";
import getServices from "@/actions/home/actions";

export default async function Home() {

  const services = await getServices();

  const descriptionsCard = ["Tornar a terapia um espaço acessível, leve e transformador, promovendo o autoconhecimento, o bem-estar e equilíbrio emocional.", "Ser referência em atendimento psicológico humanizado, conectando pessoas ao seu próprio processo de desenvolvimento.", "Empatia, Autenticidade, Cuidado, Evolução, Individualidade, Respeito, Sensibilidade"];

  return (
    <main>
      <HeroSectionOne 
        image_src="/images/fundo-hero.png" 
        text="Encontre clareza, leveza e bem-estar com o acompanhamento psicológico que respeita o seu tempo e a sua história."
        text_style={{color:"white"}}
      />
      <SobreNosTwo 
        description="Somos a Psicode, um consultório de psicologia que une ciência,  sensibilidade e cuidado para promover autoconhecimento e qualidade de vida.Nosso propósito é tornar a terapia acessível, leve e transformadora — um espaço seguro para você falar, refletir e crescer."
        image_src="/images/sala.png"
        description_card={descriptionsCard}
        title_card={["Missão", "Visão", "Valores"]}
        image_src_card={["/images/fundo-mvv.png", "/images/fundo-mvv.png", "/images/fundo-mvv.png"]}
        style={{backgroundColor:"white", color:"black"}}
        title_style={{color:"#B54A22"}}
        style_card={{backgroundColor:"#B54A22",color:"white"}}
      />
      

      {/* Parte da página principal que vocês deverão utilizar para adicionar informações vindas do banco de dados */}
      <ServicesThree
        title_card={services.map(s => s.title)}
        description_card={services.map(s => s.content)}
        image_src_card={services.map(s => s.image)}
        link_service={services.map(s => `/service/${s.id}`)}
        style={{backgroundColor:"#F7EDE1"}}
        style_card={{backgroundColor:"#B54A22", color:"white"}}
        text_style={{color:"#B54A22"}}
      />
      {/*  */}


      <FeedbackOne
        style={{backgroundColor:"white", color:"#B54A22"}}
        client_names={["Júlia", "Vinicius"]}
        companies={["Psicode","Psicode"]}
        descriptions={["“Gostaria de parabenizar o atendimento humanizado e individual. Particularmente, enxergo a grande diferença em não ter contato robotizado em passar valores ou tirar dúvidas etc, pois atendem a necessidade de cada um. Estou amando muito a atenção da psicóloga. Tem feito com que eu reflita sobre os assuntos discutidos e com que me sinta acolhida.”", "“Gostaria de parabenizar vocês pelo atendimento humanizado e individual. Particularmente, enxergo a grande diferença em não ter contato robotizado em passar valores ou tirar dúvidas etc, pois atendem a necessidade de cada um. Estou amando muito a atenção da psicóloga. Tem feito com que eu reflita sobre os assuntos discutidos e com que me sinta acolhida.”"]}
        job_titles={["Paciente","Paciente"]}
        card_style={{backgroundColor:"#F7EDE1"}}
        dot_color={{background:"#B54A22"}}
      />

      <FeedbackTwo
        style={{backgroundColor:"#F7EDE1",color:"#B54A22"}}
        title="Nossos Psicólogos"
        image_src_card={["/images/fed1.png","/images/fed2.png","/images/fed3.jpg","/images/fed4.png",]}
      />
    </main>
  );
}
