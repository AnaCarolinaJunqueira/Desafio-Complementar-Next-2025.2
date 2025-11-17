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
        className="inline-block bg-[#7b3f2f] text-white font-medium py-3 px-8 rounded-xl"
        >
            Agendar consulta pelo WhatsApp
        </Link>
    )
}