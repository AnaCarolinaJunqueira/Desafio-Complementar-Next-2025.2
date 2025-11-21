"use client";

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function SearchBar({value, onChange}:SearchBarProps){
    return(
        <input type="text" placeholder="Pesquisar serviços" value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full md:w-80 px-4 py-2 border rounded-xl focus:outline-none focus:ring-[#B54A22]"
        />
    )
}