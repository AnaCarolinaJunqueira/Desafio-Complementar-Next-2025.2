"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar(){
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [search, setSearch] = useState(searchParams.get("search") ?? "");

    function handleSearch(e: React.FormEvent){
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());

        if(search){
            params.set("search", search);
        } 
        else{
            params.delete("search");
        }
        router.push(`${pathname}?${params.toString()}`);
    }
    return(
        <div className="flex justify-center mb-6">
            <form onSubmit={handleSearch} className="w-1/2 relative">
                <input type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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