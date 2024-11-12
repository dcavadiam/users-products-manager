import { Trash } from "lucide-react"
import { Button } from "./ui/button"

interface DeleteButtonProps {
    onClick?: () => void;
}

export const DeleteButton = ({ onClick }: DeleteButtonProps) => {
    return (
        <Button className="bg-transparent rounded-full hover:bg-slate-100 hover:text-red-500 text-red-500 w-10 h-10" onClick={onClick}>
            <Trash className="w-8 " />
        </Button>
    )
}