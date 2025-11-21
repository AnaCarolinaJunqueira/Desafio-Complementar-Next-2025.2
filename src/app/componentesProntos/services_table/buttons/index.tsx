type ButtonsProps = {
    id: string | number;
    onView: (id: string | number) => void;
    onEdit: (id: string | number) => void;
    onDelete: (id: string | number) => void;
};

export default function Buttons({id, onView, onEdit, onDelete}: ButtonsProps){
    return(
        <div className="flex items-center gap-3">
            {/*Botao de view */}
            <button onClick={() => onView(id)} className="px-3 py-1 text-sm rounded-md bg-[#B54A22]text-white hover:bg-[#7b3f2f] transition">
                View
            </button>
            {/*Botao de edit */}
            <button onClick={() => onEdit(id)} className="px-3 py-1 text-sm rounded-md bg-[#B54A22]text-white hover:bg-[#7b3f2f] transition">
                Edit
            </button>
            {/*Botao de delete */}
            <button onClick={() => onDelete(id)} className="px-3 py-1 text-sm rounded-md bg-[#B54A22]text-white hover:bg-[#7b3f2f] transition">
                Delete
            </button>
        </div>
    )
}