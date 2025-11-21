type ButtonsProps = {
    id: string | number;
    onView: (id: string | number) => void;
    onEdit: (id: string | number) => void;
    onDelete: (id: string | number) => void;
};

export default function Buttons({id, onView, onEdit, onDelete}: ButtonsProps){
    return(
        <div>
            
        </div>
    )
}