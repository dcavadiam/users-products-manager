import { Edit } from "lucide-react"
import { Button } from "./ui/button"

interface EditButtonProps {
    onClick?: () => void;
}

export const EditButton = ({ onClick }: EditButtonProps) => {
    return (
        <Button className="bg-transparent  rounded-full hover:bg-slate-100 hover:text-blue-500 text-blue-500 w-10 h-10" onClick={onClick}>
            <Edit className="w-8 " />
        </Button>
    )
}