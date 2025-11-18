import Link from "next/link";

type WhatsAppButtonProps = {
    phone: string;
    message: string;
};

export default function WhatsAppButton({phone, message}: WhatsAppButtonProps){
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return(
        <Link
        href={link}
        target="_blank"
        className="inline-block bg-[#B54A22] text-white font-medium py-3 px-8 rounded-xl hover:bg-[#7b3f2f] transition-all"
        >
            Agendar consulta pelo WhatsApp
        </Link>
    )
}