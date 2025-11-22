import { PrismaClient } from '../generated/prisma/client';


const prisma = new PrismaClient();


async function main() {


  const services = [
    {
      title: 'Terapia Individual',
      content: 'Atendimento psicológico individual, focado no acolhimento e na compreensão das experiências pessoais. O objetivo é promover autoconhecimento, fortalecimento emocional e desenvolvimento de estratégias para lidar com desafios cotidianos.',
      price: 59.99,
      whatsapp: "32991995758",
      image: "/images/imagem_exemplo.jpg",
      published: true,
    },
    {
      title: 'Terapia de Casal',
      content: 'Espaço seguro para casais que desejam melhorar a comunicação, resolver conflitos e reconstruir a conexão emocional. A abordagem visa compreender as dinâmicas do relacionamento e promover mudanças saudáveis.',
      price: 80.39,
      whatsapp: "32991995758",
      image: "/images/imagem_exemplo.jpg",
      published: true,
    },
    {
      title: 'Psicoterapia Infantil',
      content: 'Atendimento voltado para crianças, utilizando estratégias lúdicas e expressivas que facilitam a comunicação e expressão emocional. Ideal para lidar com ansiedade, dificuldades escolares, birras, inseguranças ou mudanças na rotina familiar.',
      price: 55.20,
      whatsapp: "32991995758",
      image: "/images/imagem_exemplo.jpg",
      published: true,
    },
    {
      title: 'Avaliação Psicológica',
      content: 'Processo estruturado que inclui entrevistas, aplicação de testes psicológicos e elaboração de relatório. Indicado para investigação diagnóstica, tomada de decisões e auxílio em processos escolares, clínicos ou profissionais.',
      price: 300.00,
      whatsapp: "32991995758",
      image: "/images/imagem_exemplo.jpg",
      published: true,
    },
    {
      title: 'Orientação Profissional',
      content: 'Atendimento destinado a adolescentes e adultos que desejam apoio na escolha ou transição de carreira. O processo inclui identificação de interesses, talentos, valores e objetivos pessoais.',
      price: 200.00,
      whatsapp: "32991995758",
      image: "/images/imagem_exemplo.jpg",
      published: true,
    },
    {
      title: 'Terapia Familiar',
      content: 'Atendimento voltado para compreender as dinâmicas familiares, melhorar a comunicação e fortalecer vínculos. Ideal para momentos de conflito, mudanças estruturais ou dificuldades emocionais que afetam o convívio.',
      price: 260.00,
      whatsapp: "32991995758",
      image: "/images/imagem_exemplo.jpg",
      published: true,
    },
    {
      title: 'Apoio Emocional para Luto',
      content: 'Acolhimento especializado para pessoas que estão enfrentando perdas significativas. O processo auxilia na expressão das emoções, compreensão das fases do luto e reconstrução do sentido após a perda.',
      price: 180.00,
      whatsapp: "32991995758",
      image: "/images/imagem_exemplo.jpg",
      published: true,
    },
    {
      title: 'Consultoria em Saúde Mental para Empresas',
      content: 'Serviço voltado para organizações que desejam promover um ambiente emocionalmente saudável. Inclui palestras, rodas de conversa, intervenções pontuais e orientações personalizadas para equipes e gestores.',
      price: 350.00,
      whatsapp: "32991995758",
      image: "/images/imagem_exemplo.jpg",
      published: true,
    },
    {
      title: 'Sessão de Psicoeducação',
      content: 'Encontros focados em explicar, de maneira clara e acessível, conceitos psicológicos relacionados a sintomas, diagnósticos e comportamentos. O objetivo é oferecer compreensão e autonomia ao paciente em seu processo terapêutico.',
      price: 150.00,
      whatsapp: "32991995758",
      image: "/images/imagem_exemplo.jpg",
      published: true,
    },
  ];


  for (const service of services) {
    await prisma.services.create({
      data: service,
    });
  }
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
