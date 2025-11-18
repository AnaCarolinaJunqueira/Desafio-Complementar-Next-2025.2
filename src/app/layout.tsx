import type { Metadata } from "next";
import { Nunito, Zain } from "next/font/google";
import "./globals.css";
import Navbar1 from "./componentesProntos/navbar/variante1";
import Footer1 from "./componentesProntos/footer/variante1";


const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
})

const zain = Zain({
  variable: "--font-zain",
  weight: ["200","300","400","700","800","900"]
})

 const pages = [
    { name: "Home", url: "/" },
    { name: "Sobre nós", url: "#sobre" },
    { name: "Serviços", url: "#servicos" },
    { name: "Feedbacks", url: "#feedback" },
    { name: "Equipe", url: "#clientes" },
    { name: "Gerenciamento", url: "/gerenciamento" },
  ];

  const links = [
    { link: "https://instagram.com", icon: "/images/insta.png" },
    { link: "https://facebook.com", icon: "/images/fb.png" },
    { link: "https://mail.google.com", icon: "/images/email.png" },
    { link: "https://linkedin.com", icon: "/images/linkedin.png" },
    { link: "https://github.com/ViniCampos12", icon: "/images/phone.png" },
  ];

export const metadata: Metadata = {
  title: "Psicode",
  description: "O lugar para os programadores resolverem seus problemas de uma maneira melhor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${nunito.variable} ${zain.variable} antialiased`}
      >
        <Navbar1
        image_src="/images/logo.png" 
        pages={pages} 
        title_image="Psicode" 
        link_color="#B54A22" 
        style={{backgroundColor:"white", color:"#B54A22"}}
        />
        {children}
        <Footer1
        style={{backgroundColor:"#B54A22", color:"white"}}
        image_src="/images/logo-nome.png"
        information="Universidade Federal de Juiz de Fora"
        title_information="Endereço"
        links={links}
        />
        
      </body>
    </html>
  );
}
