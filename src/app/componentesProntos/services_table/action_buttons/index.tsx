type ActionButtonsProps = {
    onView: () => void;
    onEdit: () => void;
    onDelete: () => void;
};

export default function ActionButtons({onView, onEdit, onDelete}: ActionButtonsProps){
    return(
        <div className="flex items-center gap-3 justify-center">
            {/*Botao de view */}
            <button onClick={onView} className="px-3 py-1 text-sm rounded-md bg-[#D16339] text-white hover:bg-[#B54A22] transition">
                View
            </button>
            {/*Botao de edit */}
            <button onClick={onEdit} className="px-3 py-1 text-sm rounded-md bg-[#D16339] text-white hover:bg-[#B54A22] transition">
                Edit
            </button>
            {/*Botao de delete */}
            <button onClick={onDelete} className="px-3 py-1 text-sm rounded-md bg-[#D16339] text-white hover:bg-[#B54A22] transition">
                Delete
            </button>
        </div>
    )
}