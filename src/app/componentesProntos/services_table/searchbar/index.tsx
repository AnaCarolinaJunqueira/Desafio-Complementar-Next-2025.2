"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar(){
    const router = useRouter();
    const searchParams = useSearchParams();
    const initial = searchParams.get("search") || "";
    const [value, setValue] = useState(initial);

    useEffect(()=>{
        setValue(initial);
    }, [initial]);

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        const q = value.trim();
        router.push(`?page=1${q ? `&search=${encodeURIComponent(q)}`: ""}`);
    };
    return(
        <div className="flex justify-center mb-6">
            <form onSubmit={handleSubmit} className="w-1/2 relative">
                <input type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Pesquisar serviço"
                className="border border-gray-300 rounded-lg p-2 pr-10 w-full"
            />
            {/*Lupa */}
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#B54A22]">
                    <Search size={20}/>
                </button>
            </form>
        </div>
    )
}